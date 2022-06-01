const db = require('../database')

const getTest = (req, res) => {
  let query = "SELECT * FROM tbl_test"

  db.query(query, (err, result) => {
    if (!err) {
      res.send(result);
    }
    if (err) {
      res.status(400).send(err);
      return;
    }
  });
}

module.exports = {
  getTest
}