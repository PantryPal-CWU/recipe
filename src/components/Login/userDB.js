const mysql = require("mysql");



const connection = mysql.createConnection({
    host: 'mydb.clpczhezhvi1.us-west-2.rds.amazonaws.com',
    user: 'admin',
    password: 'password',
    database: 'Recipe'
  })



module.exports = connection;