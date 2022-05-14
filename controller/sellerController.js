const { v4: uuidv4 } = require('uuid');

let sellers = []

const getSellerTest = (req, res) => {
  res.send('this is seller controller')
}

const addSeller = (req, res) => {
  const {
    id,
    shopName,
    address,
    skill,
    sellerPhoto,
    sellerName,
    phoneNumber,
    email,
    priceRange,
  } = req.body

  const insertedAt = new Date().toISOString();

  const newSeller = {
    id,
    shopName,
    address,
    skill,
    sellerPhoto,
    sellerName,
    phoneNumber,
    email,
    priceRange,
  }

  sellers.push(newSeller)
}

module.exports = {
  getSellerTest,
  addSeller
}