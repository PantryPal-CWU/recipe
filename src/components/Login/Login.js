/*
File: Login.js
?: This is the login page. It contains a LoginForm to login.
*/ 
import React, { useState } from 'react';
import {Card, Button} from 'react-bootstrap';
import LoginForm from './LoginForm';
import Authenticate from './Authenticate';
import './Login.css';

//Think of something like this as an import
// var authenticate = require('./AccountServices.js');


function Login() {
    const [isChecking, setCheckFlag] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    //Simlpy returns a LoginForm which is defined in LoginForm.js
    return (
        (!isChecking) ? 
            <div className="main">
                <div className="title"> <h1> Log In </h1> </div>
                <div className="form-format">
                    <>
                    <LoginForm setCheckFlag={setCheckFlag} setEmail={setEmail} setPassword={setPassword} /> 
                    </>
                </div>
            </div> 
        :
        <Authenticate email={email} password={password} setCheck={setCheckFlag} />

    );
}

export default Login; 