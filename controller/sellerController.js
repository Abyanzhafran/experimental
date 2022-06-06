const { v4: uuidv4 } = require('uuid');

const sellers = []

const getSellerTest = (req, res) => {
  res.send('this is seller controller')
}

const addSeller = (req, res) => {
  const {
    shopName,
    province,
    city,
    streetName,
    detailStreet,
    skill,
    sellerPhoto,
    sellerName,
    phoneNumber,
    email,
    latitude,
    longtitude
  } = req.body

  const id = uuidv4()
  const insertedAt = new Date().toISOString()

  const newSeller = {
    id,
    shopName,
    province,
    city,
    streetName,
    detailStreet,
    skill,
    sellerPhoto,
    sellerName,
    phoneNumber,
    email,
    insertedAt,
    latitude,
    longtitude
  }

  sellers.push(newSeller)

  const isSuccess = sellers.filter((seller) => seller.id === id).length > 0

  if (isSuccess) {
    res.status(200)
    res.send({
      status: 'success',
      message: 'Seller added successfully',
      data: {
        sellerId: newSeller.id
      }
    })
  }

  res.status(201).send('Seller failed to add')
}

const getAllSellers = (req, res) => {
  if (sellers !== undefined) {
    res.status(200).send({
      status: 'success',
      sellers
    })
  }

  res.send('Cannot get seller')
}

const getSellerById = (req, res, h) => {
  const { id } = req.params

  const seller = sellers.filter(x => x.id === id)[0]

  if (seller == undefined) {
    res.status(404)
    res.send({
      status: 'fail',
      message: 'Seller not found'
    })
  }

  res.status(200).send(seller)
}

const editSellerById = (req, res) => {
  const { id } = req.params

  const {
    shopName,
    province,
    city,
    streetName,
    detailStreet,
    skill,
    sellerPhoto,
    sellerName,
    phoneNumber,
    email,
    latitude,
    longtitude
  } = req.body

  const updatedAt = new Date().toISOString()
  const index = sellers.findIndex(seller => seller.id === id)

  if (index !== -1) {
    sellers[index] = {
      ...sellers[index],
      shopName,
      province,
      city,
      streetName,
      detailStreet,
      skill,
      sellerPhoto,
      sellerName,
      phoneNumber,
      email,
      updatedAt,
      latitude,
      longtitude
    }

    res.status(200)
    res.send({
      status: 'success',
      message: 'Seller successfully updated'
    })
  }

  res.status(404)
  res.send({
    status: 'fail',
    message: 'Failed to update seller, id not found'
  })
}


const deleteSellerById = (req, res) => {
  const { id } = req.params

  const index = sellers.findIndex(seller => seller.id === id)

  if (index !== -1) {
    sellers.splice(index, 1)
    res.status(200)
    res.send({
      status: 'success',
      message: 'Seller successfully deleted'
    })
  }

  res.status(404)
  res.send({
    status: 'fail',
    message: 'failed to delete seller, id not found'
  })
}

module.exports = {
  getSellerTest,
  addSeller,
  getAllSellers,
  getSellerById,
  editSellerById,
  deleteSellerById
}