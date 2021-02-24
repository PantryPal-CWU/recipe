/*
File: AccountServices.js
?: This is where our user registration, login authentication, and hashing passwords occur. 
*/

// import React, { useState, createContext } from 'react';
// import { useLoginStatus } from '../../LoginContext'
import { useEffect, useState } from 'react';
const bcrypt = require('bcryptjs');
const sql = require("../../userDB.js");



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
// async function authenticate(email, password) {
//     const [result, setResult] = useState(true);
//     useEffect(() => {
//         fetch(`/authenticate?email=${email}&password=${password}`)
//         .then(res => res.json())
//         .then(data => {
//             if(data.status === 400) {
//                setResult(true);
//             } else {
//                 setResult(false);
//             }
//         });
//     }, []);

//     if (result) {
//         console.log("Success! Log in.");
//         return true;
//     } else {
//         console.log("Unsuccessful log in.");
//         return false;
//     }
// }

//Returns hash of a password. Used to incrypt passwords for safe keeping.
//Note that if you wanted to compare a bcrypt hash with a string, you can call 
//              bcrypt.compare(password, hashedPassword);
//But for our purposes, we can search our database for the username then use this compare! 
//This would be done in authenticate
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