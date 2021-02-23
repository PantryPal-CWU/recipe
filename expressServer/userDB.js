const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');


const app = express();
const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Express function on port ${port}`));

const SELECT_USERS = 'SELECT Email, Password FROM UserBase';
const SELECT_LOGIN = 'SELECT Email, LoginStatus FROM UserBase';


// app.listen(port, () => res.send("Hi!"));

const connection = mysql.createConnection({
  host: 'mydb.clpczhezhvi1.us-west-2.rds.amazonaws.com',
  user: 'admin',
  password: 'password',
  database: 'Recipe'
});
connection.connect(err => {
  if(err) {
    return err;
  }
});

app.use(cors());

//app.json can be used to get an api for ingredients on here, for now it says this
app.get('/', (req, res) => {
  res.send('What are you doing here!');
});

app.get('/signup', (req, res) => {
  const { email, password } = req.query;
  
  const hashedPass = hash(password);

  const INSERT_USER = `INSERT INTO UserBase (Password, Email) VALUES('${hashedPass}', '${email}')`;
  connection.query(INSERT_USER, (err, results) => {
    if(err) {
      return res.send(false);
    }
    else {
      connection.query(`UPDATE UserBase SET LoginStatus = 1 WHERE Email = '${email}'`);
      return res.send(true);
    }
  });
});

//Note: change users to hash
app.get('/authenticate', (req, res) => {
  const { email, password } = req.query;
  connection.query(SELECT_USERS, (err, results) => {
    if(err) {
      //return err
      return res.send(err);
    }
    else {
      
      const grabUser = results.find(ele => ele['Email']===email);
      if(grabUser!==undefined) {

        let comparison = bcrypt.compareSync(password, grabUser['Password']);
        if(comparison) {
          connection.query(`UPDATE UserBase SET LoginStatus = 1 WHERE Email = '${grabUser['Email']}'`);
          return res.send(true);
        }
        
      }
      return res.send(false);
      
    }
  });
});

app.get('/loginstatus', (req, res) => {
  const { email } = req.query;

  connection.query(SELECT_LOGIN, (err, results) => {
    if(err) {
      res.send(err);
    }
    const grabUser = results.find(ele => ele['Email']===email);
    if(grabUser !== undefined) {
      if(grabUser['LoginStatus'] === null) {
        return res.send(false);
      }
      else if(grabUser['LoginStatus']) {
        return res.send(true);
      } 
    } else {
      res.send(false);
    }
  });
  // return res.send(false);
});

app.get('/signout', (req, res) => {
  const { email } = req.query;

  connection.query(SELECT_USERS, (err, results) => {
    if(err) {
      return res.send(err);
    } else {
      // const grabUser = results.find(ele => ele['Email']===email);
      connection.query(`UPDATE UserBase SET LoginStatus = 0 WHERE Email = '${email}'`);
      return res.send(email);
    }
  });
  // return res.send("GOODBYE!");
  
});

const hash = (password, saltRounds = 10) => {
  try {
      // create salt
      const salt = bcrypt.genSaltSync(saltRounds);

      // Hash
      return bcrypt.hashSync(password, salt);
  } catch (error) {
      console.log(error);
  }
  
  return null;
}