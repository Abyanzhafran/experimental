const express = require('express')
const router = express.Router()
const {
  getTransactionTest,
  beginTransaction
} = require('../controller/transactionController')

router.get('/', getTransactionTest)

router.post('/', beginTransaction)

module.exports = router