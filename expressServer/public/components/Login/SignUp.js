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

    return (
        (!isChecking) ?
            <div className="main">
            <div className="title"> <h1> Sign Up </h1> </div>
                <div className="form-format">
                    <SignUpForm setEmail={setEmail} setPassword={setPassword} setCheckFlag={setCheckFlag} />
                </div>
            </div>
        :
        <Registration email={email} password={password} setCheckFlag={setCheckFlag} />
    )
}

export default SignUp;