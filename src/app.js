const express = require("express")
const cors = require('cors')
const app = express()
const sellerRouter = require('../router/seller')
const userRouter = require('../router/user')
const searchRouter = require('../router/search')
const productRouter = require('../router/product')
const testRouter = require('../router/test')
const transactionRouter = require('../router/transaction')

// enable middleware
app.use(express.json())

// enable cors
app.use(cors())

// use specific route handler
app.use('/seller', sellerRouter)
app.use('/user', userRouter)
app.use('/search', searchRouter)
app.use('/product', productRouter)
app.use('/test', testRouter)
app.use('/transaction', transactionRouter)


app.get('/', (req, res) => {
  res.send('Hello yoi mamen')
})

app.all("*", (req, res) => {
  res.send('page not found')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

const PORT = parseInt(process.env.PORT) || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});