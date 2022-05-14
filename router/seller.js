const express = require('express')
const router = express.Router()
// const getSellersTest = require('../controller/sellerController')
const {
  getSellerTest
} = require('../controller/sellerController')

// define the route
router.get('/', (req, res) => {
  res.send('Sellers home page')
})

router.get('/test', getSellerTest)

router.get('/about', (req, res) => {
  res.send('About birds')
})

module.exports = router