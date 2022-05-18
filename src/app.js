const express = require("express")
const cors = require('cors')
const app = express()
const port = 3000
const sellerRouter = require('../router/seller.js')
const userRouter = require('../router/user')

app.use(express.json())
app.use(cors())

// use specific route handler
app.use('/seller', sellerRouter)
app.use('/user', userRouter)

app.get('/', (req, res) => {
  res.send('Hello yoi mamen')
})

app.all("*", (req, res) => {
  res.send('page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})