import React, { useState, createContext } from 'react';
import { useLoginStatus } from '../../LoginContext'
const bcrypt = require('bcryptjs');
//Need to do: npm install bcryptjs in your recipe directory

export {
    authenticate,
    register
};

const adminUser = {
    name: "Alek",
    email: "test@test.test",
    password: "12345"
}

async function register(name, email, password) {
    
}

async function authenticate(email, password) {
    if (email === adminUser.email && password === adminUser.password) {
        console.log("Success! Log in.");
        return true;
    } else {
        console.log("Unsuccessful log in.");
        return false;
    }
}

const hashPassword = async (password, saltRounds = 10) => {
    try {
        // create salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash
        return await bcrypt.hash(password, salt);
    } catch (error) {
        console.log(error);
    }

    return null;
}