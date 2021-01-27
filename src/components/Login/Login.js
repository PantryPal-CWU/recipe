

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { useLoginStatus } from '../../LoginContext'
//import { Redirect } from 'react-router-dom';
//import AccountServices from './AccountServices';

//import { Login } from '..';
import './Login.css';
import { Redirect } from 'react-router-dom';

var authenticate = require('./AccountServices.js');


function Login(props) {
    
    const { toggleLoginStatus } = useLoginStatus();


    const Login = (email, password) => {
        console.log(email);
        var Promise = authenticate.authenticate(email, password).then((result) => {
            if (result) {
                toggleLoginStatus();

               // window.location.reload(false);
            } else {
                alert("Username/Password Combination Incorrect");
            }
        });
    }

  
    return (
        
        <LoginForm Login={Login} /> 
        
    )
}

export default Login; 