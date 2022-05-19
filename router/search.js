const express = require('express')
const router = express.Router()
const {
  getSearchTest,
  getSearch
} = require('../controller/searchController')

router.use(function (req, res, next) {
  next()
})

router.get('/test', getSearchTest)

router.get('/', getSearch)


module.exports = router