const mysql = require("mysql")

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "d-jahit-relational",
})

module.exports = conn
