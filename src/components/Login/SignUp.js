/*
File: SignUp.js
?: Sign up page for user registration
*/ 
import React from 'react';
import SignUpForm from "./SignUpForm";

function SignUp() {

    //Requires implementation with SQL/Express
    const SignUp = (name, email, password) => {
        alert(name + " | " + email + " | " + password);
    }

    return (
        <>
            <div className="main">
            <div className="title"> <h1> Sign Up </h1> </div>
                <div className="form-format">
                <SignUpForm SignUp={SignUp} />
                </div>
            </div>
        </>
    )
}

export default SignUp;