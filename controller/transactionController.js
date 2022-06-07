const { v4: uuidv4 } = require('uuid');
const db = require('../database')

const getTransactionTest = (req, res) => {
  res.send('this is transaction')
}

const beginTransaction = (req, res) => {
  const {
    userId,
    username,
    idPurpose,
    productName,
    productAmount,
    price,
    totalPrice
  } = req.body

  const idTransaction = uuidv4()
  const insertedAt = new Date().toISOString()

  const newTransaction = {
    idTransaction,
    userId,
    username,
    idPurpose,
    productName,
    productAmount,
    price,
    totalPrice,
    insertedAt
  }

  const getObjVal = Object.values(newTransaction)

  let query = "INSERT INTO tbl_transaction (idTransaction, userId, username, idPurpose, productName, productAmount, price, totalPrice, insertedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
  db.query(query, getObjVal, (err) => {
    if (err) {
      res.status(201).send('Transaction failed')
      throw err
    }
    res.status(200)
    res.send({
      status: 'success',
      message: 'Transaction success',
      data: {
        transactionid: newTransaction.idTransaction
      }
    })
  })
}

module.exports = {
  getTransactionTest,
  beginTransaction,
}