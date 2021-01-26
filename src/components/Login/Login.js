

import React, { useState } from 'react';
import LoginForm from './LoginForm';
//import { Login } from '..';
import './Login.css';


function Login() {
    const [user, setUser] = useState({ name: "", email: "" });
    const [error, setError] = useState("");

    const Login = (details) => {
        console.log(details);

        //if(details.email == email && details.password == password)
        //console.log("Logging in")
        //setUser({ name: user.name, email: details.email})
        //else, setError("Details do not match!")

        console.log("You need a place to store user information!");

    }
    
    const Logout = () => {
        setUser({ name: "", email: "" });
    }
    
    return (
        <LoginForm Login={Login} error={error} />
    )
}

export default Login; 