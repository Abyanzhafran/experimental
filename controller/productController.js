const { v4: uuidv4 } = require('uuid');

const products = []

const getProductTest = (req, res) => {
  res.send('this is product controller')
}

const addProduct = (req, res) => {
  const {
    productPhoto,
    name,
    definition,
    price_1,
    price_2,
  } = req.body

  const id = uuidv4()
  const insertedAt = new Date().toISOString()

  const newProduct = {
    id,
    productPhoto,
    name,
    definition,
    price_1,
    price_2,
    insertedAt
  }

  products.push(newProduct)

  const isSuccess = products.length > 0

  if (isSuccess) {
    res.status(200)
    res.send({
      status: 'success',
      message: 'Product added successfully',
      data: {
        productId: newProduct.id
      }
    })
  }
}

const getAllProduct = (req, res) => {
  if (products !== undefined) {
    res.status(200).send({
      status: 'success',
      products
    })
  }

  res.send('Cannot get products')
}

const getProductById = (req, res) => {
  const { id } = req.params

  const product = products.filter(x => x.id === id)[0]

  if (product == undefined) {
    res.status(404)
    res.send({
      status: 'fail',
      message: 'Product not found'
    })
  }

  res.status(200).send(product)
}

const editProductById = (req, res) => {
  const { id } = req.params

  const {
    productPhoto,
    name,
    definition,
    price_1,
    price_2,
  } = req.body

  const updatedAt = new Date().toISOString()
  const index = products.findIndex(product => product.id === id)

  if (index !== -1) {
    products[index] = {
      ...products[index],
      productPhoto,
      name,
      definition,
      price_1,
      price_2,
      updatedAt
    }

    res.status(200)
    res.send({
      status: 'success',
      message: 'Product successfully updated'
    })
  }

  res.status(404)
  res.send({
    status: 'fail',
    message: 'Failed to update product, id not found'
  })
}

const deleteProductById = (req, res) => {
  const { id } = req.params

  const index = products.findIndex(x => x.id === id)

  if (index !== -1) {
    products.splice(index, 1)
    res.status(200)
    res.send({
      status: 'success',
      message: 'Product successfully deleted'
    })
  }

  res.status(404)
  res.send({
    status: 'fail',
    message: 'Product failed to delete, product not found'
  })
}

// function priceRangeFormat(p1, p2) {
//   console.log(products.priceRange)
//   const result = "Rp. " + p1 + " - " + "Rp. " + p2
//   console.log(result)
// }

module.exports = {
  getProductTest,
  addProduct,
  getAllProduct,
  getProductById,
  editProductById,
  deleteProductById
}