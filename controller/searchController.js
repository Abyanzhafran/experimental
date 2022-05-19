const data = [
  {
    product: 'Celana',
    shopName: 'brianbag'
  },
  {
    product: 'Jaket',
    shopName: 'brayyanJacket'
  },
  {
    product: 'Dress',
    shopName: 'dressin'
  }
]

const resCategory = []

const getSearchTest = (req, res) => {
  res.send('this is search controller')
}

const getSearch = (req, res) => {
  const { category } = req.body

  if (category == 'product') {
    // res.send('this is product search')
    defCategory(category)
  } else if (category == 'shopName') {
    // res.send('this is shopName search')
    defCategory(category)
  } else (
    // console.log('your category not found')
    res.send('your category not found')
  )
}

// stuck here
const defCategory = (category, req, res) => {
  if (category == 'product') {
    console.log('this is product search')
    // console.log(category)
    // if (resCategory.length == 1) {
    //   resCategory.pop()
    // }
    // resCategory.push(category)
    // console.log(resCategory, resCategory.length)
  }
  // if (category == 'shopName') {
  //   // console.log('this is shopName search')
  //   // console.log(category)
  //   // if (resCategory.length == 1) {
  //   //   resCategory.pop()
  //   // }
  //   // resCategory.push(category)
  //   // console.log(resCategory, resCategory.length)
  // }
}


// const findData = (req, res) => {
//   const { prodSearch } = req.body
//   const check = data.find(({ product }) => product === prodSearch)
//   console.log(check)
// }

// const searchNow = (req, res) => {
//   if (resCategory[0] == 'product') {
//     const { product } = req.body
//     const newSearch = { product }
//   } else if (resCategory[0] == 'shopName') {
//     const { shopName } = req.body
//     const newSearch = { shopName }
//   }
// }


module.exports = {
  getSearchTest,
  getSearch
}