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
                <div className="form-format">
                <div className="title">Log In</div>
                    <LoginForm setEmail={setEmail} setPassword={setPassword} setCheckFlag={setCheckFlag} /> 
                    <div className="why">
                        <div className="why-title">Why have an account with Pantry Pal</div>
                        <div className="why-text">Because it's awesome. That's why.</div>
                    </div>
                </div>
            </div>
        :
        <Authenticate email={email} password={password} setCheck={setCheckFlag} />

    );
}

export default Login; 