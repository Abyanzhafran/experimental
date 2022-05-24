const { v4: uuidv4 } = require('uuid');

const users = []

const getUserTest = (req, res) => {
  res.send('this is user controller')
}

const auth = (req, res) => {
  const { username, password } = req.params
  console.log(username + " " + password)
  const isName = users.map(x => x.username.includes(username))
  const isPass = users.map(x => x.password.includes(password))
  if (isName.includes(true) == true && isPass.includes(true) == true) {
    res.status(200)
    res.send({
      status: 'success',
      message: 'Login successfully'
    })
  } else {
    res.status(404)
    res.send({
      status: 'fail',
      message: 'User not found'
    })
  }
}

const addUser = (req, res) => {
  const {
    fullName,
    username,
    password,
    gender,
    dateOfBirth,
    phoneNumber,
    email,
    photoProfile
  } = req.body

  const id = uuidv4()
  const insertedAt = new Date().toISOString()

  const newUser = {
    id,
    fullName,
    username,
    password,
    gender,
    dateOfBirth,
    phoneNumber,
    email,
    photoProfile,
    insertedAt,
  }

  users.push(newUser)

  const isSuccess = users.filter((user) => user.id === id).length > 0

  if (isSuccess) {
    res.status(200)
    res.send({
      status: 'success',
      message: 'User added successfully',
      data: {
        userId: newUser.id
      }
    })
  }

  res.status(201).send('User failed to add')
}

const getAllUsers = (req, res) => {
  if (users !== undefined) {
    res.status(200).send(users)
  }

  res.send('Cannot get user')
}

const getUserById = (req, res) => {
  const { id } = req.params

  const user = users.filter(x => x.id === id)[0]

  if (user == undefined) {
    res.status(404)
    res.send({
      status: 'fail',
      message: 'User not found'
    })
  }

  res.status(200).send(user)
}

const editUserById = (req, res) => {
  const { id } = req.params

  const {
    fullName,
    username,
    password,
    gender,
    dateOfBirth,
    phoneNumber,
    email,
    photoProfile
  } = req.body

  const updatedAt = new Date().toISOString()
  const index = users.findIndex(user => user.id === id)

  if (index !== -1) {
    users[index] = {
      ...users[index],
      fullName,
      username,
      password,
      gender,
      dateOfBirth,
      phoneNumber,
      email,
      photoProfile,
      updatedAt
    }

    res.status(200)
    res.send({
      status: 'success',
      message: 'User successfully updated'
    })
  }
}

const deleteUserById = (req, res) => {
  const { id } = req.params

  const index = users.findIndex(seller => seller.id === id)

  if (index !== -1) {
    users.splice(index, 1)
    res.status(200)
    res.send({
      status: 'success',
      message: 'Users successfully deleted'
    })
  }

  res.status(404)
  res.send({
    status: 'fail',
    message: 'Users failed to delete, id not found'
  })
}

module.exports = {
  getUserTest,
  addUser,
  auth,
  getAllUsers,
  getUserById,
  editUserById,
  deleteUserById,
}

