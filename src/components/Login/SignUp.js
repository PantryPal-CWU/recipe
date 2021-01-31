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
            <SignUpForm SignUp={SignUp} />
        </>
    )
}

export default SignUp;