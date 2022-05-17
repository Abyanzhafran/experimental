const { v4: uuidv4 } = require('uuid');

var users = []

const getUserTest = (req, res) => {
  res.send('this is user controller')
}

const addUser = (req, res) => {
  const {
    username,
    address,
    email,
    phoneNumber,
    photoProfile
  } = req.body

  const id = uuidv4()
  const insertedAt = new Date().toISOString()

  const newUser = {
    id,
    username,
    address,
    email,
    phoneNumber,
    photoProfile,
    insertedAt,
  }

  users.push(newUser)

  const isSuccess = users.filter((user) => user.id === id).length > 0

  if (isSuccess) {
    res.status(200)
    res.send({
      status: 'success',
      message: 'Seller added successfully',
      data: {
        userId: newUser.id
      }
    })
  }

  res.status(201).send('User failed to add')
}

module.exports = {
  getUserTest,
  addUser
}

