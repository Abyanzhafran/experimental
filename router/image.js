const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');
const db = require('../database')
// const process = require('process'); // Required to mock environment variables

// [START gae_storage_app]
const { format } = require('util');
const Multer = require('multer');
const { Storage } = require('@google-cloud/storage');

// Instantiate a storage client
const storage = new Storage();

const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 5mb, you can change as needed.
  },
});

// add your bucket name here boyy
const bucket = storage.bucket('cogent-tempo-351103.appspot.com');

router.post('/upload', multer.single('file'), (req, res, next) => {
  if (!req.file) {
    res.status(400).send('No file uploaded.');
    return;
  }

  // Create a new blob in the bucket and upload the file data.
  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream({
    resumable: false,
  });

  blobStream.on('error', err => {
    next(err);
  });

  blobStream.on('finish', () => {
    // The public URL can be used to directly access the file via HTTP.
    const publicUrl = format(
      `https://storage.googleapis.com/${bucket.name}/${blob.name}`
    );
    const id = uuidv4()

    let query = "INSERT INTO tbl_image (id, image_url) VALUES (?, ?)"
    db.query(query, [id, publicUrl], (err) => {
      if (err) {
        res.status(201).send('Seller failed to add')
        throw err
      }
      res.status(200).send(publicUrl)
    })
  });

  blobStream.end(req.file.buffer);
});

module.exports = router