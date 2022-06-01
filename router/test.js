const express = require('express')
const router = express.Router()
const { getTest } = require('../controller/testController')

router.get('/', getTest)

module.exports = router