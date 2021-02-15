/*
File: AccountServices.js
?: This is where our user registration, login authentication, and hashing passwords occur. 
*/

// import React, { useState, createContext } from 'react';
// import { useLoginStatus } from '../../LoginContext'
const bcrypt = require('bcryptjs');
const sql = require("./userDB.js");


//Export the functions
export {
    authenticate,
    register
};

//Test user
const adminUser = {
    name: "Alek",
    email: "test@test.test",
    password: "12345"
}

//Currently empty, but this is where registering users will occur. Need backend
async function register(name, email, password) {
    
}

//Determines if params email and password match users in our database.
//Currently only compares to the test case! 
async function authenticate(email, password) {
    if (email === adminUser.email && password === adminUser.password) {
        console.log("Success! Log in.");
        return true;
    } else {
        console.log("Unsuccessful log in.");
        return false;
    }

    // sql.connect();

    // let res;
    // sql.query('SELECT Email, Password FROM UserBase', (err, data) => {
    //     if (err) {
    //       console.error(err);
    //       return false;
    //   } else {
          
    //       const grabbed = (data.find(ele => ele['Email']===email));
    //       alert(grabbed['Email']);
        //   if(!compareHash(password, grabbed['Password'])) {
        //     alert("WRONG EMAIL/PASSWORD COMBINATION");
        //     return false;
        //     } else {
        //         alert("Welcome!");
        //         return true;
        //     }
        // } 
    //   });

    //   sql.end();

    
    
}

//Returns hash of a password. Used to incrypt passwords for safe keeping.
//Note that if you wanted to compare a bcrypt hash with a string, you can call 
//              bcrypt.compare(password, hashedPassword);
//But for our purposes, we can search our database for the username then use this compare! 
//This would be done in authenticate
const hashPassword = (password, saltRounds = 10) => {
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

const compareHash = (cmpMe, hashed) => {
    bcrypt.compare(cmpMe, hashed, (err, isMatch) => {
        if(err) {
            throw err;
        } else if (!isMatch) {
            return false;
        } else {
            return true;
        }
    })
};