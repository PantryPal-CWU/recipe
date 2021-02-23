const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');


const app = express();
const port = process.env.PORT || 4001;
app.listen(port, () => console.log(`Express function on port ${port}`));

const SELECT_USERS = 'SELECT Email, Password FROM UserBase';

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
      // const grabUser = results.find(ele => compareHash(email, ele['Email']));
      const grabUser = results.find(ele => ele['Email']===email);
      if(grabUser!==undefined) {

        // bcrypt.compareSync(password, grabUser['Password'], (err, isMatched) => {
        //   if (err) {return res.send(err);} 
        //   if (isMatched) {return res.send(true);}
        //   if (!isMatched) {return res.send(false);} 
        //   alert(isMatched);
        // });

        let comparison = bcrypt.compareSync(password, grabUser['Password']);
        if(comparison) {
          return res.send(true);
        }
        // if(password === grabUser['Password']) {
        //   return res.status(400).send(true);
        // }
      }
      return res.send(false);
      
    }
  });
});

const compareHash = (cmpMe, hashed) => {
  let flag = true;
  return bcrypt.compareSync(cmpMe, hashed);
  
};

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