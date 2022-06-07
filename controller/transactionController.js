const { v4: uuidv4 } = require('uuid');
const db = require('../database')

const getTransactionTest = (req, res) => {
  res.send('this is transaction')
}

module.exports = {
  getTransactionTest
}