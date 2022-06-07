const express = require('express')
const router = express.Router()
const {
  getSellerTest,
  addSeller,
  getAllSellers,
  getSellerById,
  editSellerById,
  deleteSellerById
} = require('../controller/sellerController')

// define the route
router.get('/default', (req, res) => {
  res.send('Sellers home page')
})

router.get('/test', getSellerTest)

// start here
router.post('/', addSeller)

router.get('/', getAllSellers)

router.get('/:userId', getSellerById)

router.put('/:userId', editSellerById)

router.delete('/:userId', deleteSellerById)

module.exports = router