/*
File: SignUp.js
?: Sign up page for user registration
*/ 
import React, { useState } from 'react';
import SignUpForm from "./SignUpForm";
import Registration from "./Registration";

function SignUp() {
    
    const [isChecking, setCheckFlag] = useState(false);

    //Requires implementation with SQL/Express
    const SignUp = (email, password) => {
        alert(email + " | " + password);
    }

    return (
        (!isChecking) ?
            <div className="main">
            <div className="title"> <h1> Sign Up </h1> </div>
                <div className="form-format">
                    <SignUpForm SignUp={SignUp} />
                </div>
            </div>
        :
        <Registration />
    )
}

export default SignUp;