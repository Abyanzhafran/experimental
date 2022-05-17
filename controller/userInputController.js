const { v4: uuidv4 } = require('uuid');

var userInput = []

const getUserInputTest = (req, res) => {
  res.send('this is user-input controllerrrrrr')
}

const addUserInput = (req, res) => {
  const {
    sampleImage,
    province,
    kabupaten,
    city,
    kecamatan,
    category,
    address,
    username
  } = req.body

  const id = uuidv4()
  const insertedAt = new Date().toISOString()

  const newSearch = {
    sampleImage,
    province,
    kabupaten,
    city,
    kecamatan,
    category,
    address,
    username,
    insertedAt
  }

  userInput.push(newSearch)

  // const isSuccess = userInput.filter((x) => x.id === id).length > 0
}

module.exports = getUserInputTest