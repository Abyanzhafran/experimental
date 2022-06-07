const mysql = require("mysql")

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ex-upload",
})

module.exports = conn
