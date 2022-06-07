const express = require('express')
const router = express.Router()
const { getTransactionTest } = require('../controller/transactionController')

router.get('/', getTransactionTest)

module.exports = router