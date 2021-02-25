/*
File: SignUp.js
?: Sign up page for user registration
*/ 
import React, { useState } from 'react';
import SignUpForm from "./SignUpForm";
import Registration from "./Registration";

function SignUp() {
    
    const [isChecking, setCheckFlag] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //If we're not registering, show the form. Else, run Registration
    return (
        (!isChecking) ?
            <div className="main">
                <div className="form-format">
                <div className="title"> Sign Up </div>
                    <SignUpForm setEmail={setEmail} setPassword={setPassword} setCheckFlag={setCheckFlag} />
                </div>
            </div>
        :
        <Registration email={email} password={password} setCheckFlag={setCheckFlag} />
    )
}

export default SignUp;