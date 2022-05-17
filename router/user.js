const express = require('express')
const router = express.Router()
const {
  getUserTest,
  addUser
} = require('../controller/userController')

router.get('/', getUserTest)

router.post('/', addUser)

module.exports = router