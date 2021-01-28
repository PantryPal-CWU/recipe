/*
File: Login.js
?: This is the login page. It contains a LoginForm to login.
*/ 
import React from 'react';
import LoginForm from './LoginForm';
import { useLoginStatus } from '../../LoginContext'
import './Login.css';

//Think of something like this as an import
var authenticate = require('./AccountServices.js');


function Login() {
    
    //Get ability to change loginStatus (from LoginContext) 
    const { toggleLoginStatus } = useLoginStatus();

    //Comes email and password with userdatabase (handled in AccountServices.js)
    const Login = (email, password) => {
        //For monitoring, should be removed later on
        console.log(email);
        
        //Get authentication results and either change the loginStatus or give an alert for incorrect information
        var Promise = authenticate.authenticate(email, password).then((result) => {
            if (result) {
                toggleLoginStatus(email);
                window.location.reload(false);
               
            } else {
                alert("Username/Password Combination Incorrect");
            }
        });
    }

    //Simlpy returns (renders) a LoginForm which is defined in LoginForm.js
    return (
        <>
            <LoginForm Login={Login} /> 
        </>
        
        
    )
}

export default Login; 