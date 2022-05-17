const express = require('express')
const router = express.Router()
const {
  getUserInputTest
} = require('../controller/userInputController')

router.get('/test', getUserInputTest)

module.exports = router