
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'mydb.clpczhezhvi1.us-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'Recipe',
  //port: 3306
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
  if (err) throw err
  //console.log('it actually fucking connected')
})

var sqlInsert = `INSERT INTO UserBase (Password, Email)
            VALUES(?, ?)`;

var sqlPull = `SELECT * FROM UserTable`

// connection.query(sqlPull, function (err, data){
//   if (err) {
//     console.log('Something went wrong pulling!')
// } else {
//     console.log('pulled!')
// }
// });



connection.query(sqlInsert, ['passwordsThatIsAPassword','pantrypal@email.com'], function (err, data) {
    if (err) {
        console.log('Something went wrong inputing!')
    } else {
        console.log('inputed!')
    }
});

connection.end()