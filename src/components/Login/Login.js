

import React, { useState } from 'react';
import LoginForm from './LoginForm';
//import AccountServices from './AccountServices';

//import { Login } from '..';
import './Login.css';

var authenticate = require('./AccountServices.js');


function Login() {
    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = (email, password) => {
        console.log(email);

        authenticate.authenticate(email, password);
        //if(details.email == email && details.password == password)
        //console.log("Logging in")
        //setUser({ name: user.name, email: details.email})
        //else, setError("Details do not match!")

        

    }
    
    const Logout = () => {
        setUser({ name: "", email: "" });
    }

    return (
        <LoginForm Login={Login} error={error} />
    )
}

export default Login; 