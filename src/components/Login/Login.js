

import React, { useState } from 'react';
import LoginForm from './LoginForm';
import { LoginStatusProvider, useLoginStatus, useLoginUpdateStatus } from '../../LoginContext'
//import { Redirect } from 'react-router-dom';
//import AccountServices from './AccountServices';

//import { Login } from '..';
import './Login.css';
import { Redirect } from 'react-router-dom';

var authenticate = require('./AccountServices.js');


function Login(props) {
    const [user, setUser] = useState({ name: props.loginState, email: "" });
    const [error, setError] = useState("");
    const { loginStatus, toggleLoginStatus } = useLoginStatus();

    const Login = (email, password) => {
        console.log(email);

        if(authenticate.authenticate(email, password)) {
            setUser({ email: email })
            toggleLoginStatus();
            
        } else {
            alert("Incorrect combination Email/Password");
        }
        //if(details.email == email && details.password == password)
        //console.log("Logging in")
        //setUser({ name: user.name, email: details.email})
        //else, setError("Details do not match!")

        

    }

  
    return (
        
        <LoginForm Login={Login} error={error} /> 
        
    )
}

export default Login; 