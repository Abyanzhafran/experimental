const express = require("express")
// const bodyParser = require('body-parser')
const router = require('../router/seller.js')
const app = express()
const port = 3000

// app.use(bodyParser.json())
app.use(express.json())

// use specific route handler
app.use("/seller", router)

app.get('/', (req, res) => {
  res.send('Hello yoi mamen')
})

app.all("*", (req, res) => {
  res.send('page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})