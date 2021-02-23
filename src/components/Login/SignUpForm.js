/*
File: SignUpForm.js
?: Form that handles user details for registration 
The code here is pretty much one to one with LoginForm.js
*/ 
import React, { useState } from 'react';
import './Login.css';


function SignUpForm({ SignUp }) {

    const [details, setDetails] = useState({ email: "", password: "" });

    const submitHandler = (e) => {
        e.preventDefault();

        SignUp(details.email, details.password);
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="formEntry nobottomborder">
                    <h1>Join PantryPal!</h1>
                </div>
                <div className="formEntry nobottomborder notopborder">
                    <label htmlFor="email">Email Address:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        onChange={e => setDetails({...details, email: e.target.value})} 
                        value={details.email} 
                    />
                </div>
                <div className="formEntry notopborder">
                    <label htmlFor="password">Password:</label>
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        onChange={e => setDetails({...details, password: e.target.value})} 
                        value={details.password} 
                    />
                    <input id="submitButton" type="submit" value="Sign Up" />
                </div>
            </form>
        </>
    )
}

export default SignUpForm;