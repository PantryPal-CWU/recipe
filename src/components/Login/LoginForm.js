/*
File: LoginForm.js
?: Handles input for Login usage 
*/ 
import React, { useState } from 'react'
import './Login.css';



function LoginForm({ Login, error }) {
    //I dont think I had to do it like this, but it works!
    //Basically declaring three strings but using the state. To my understanding, this gets wiped out after a refresh/change page
    //Name is not needed but this is what it will look like for submissions
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    //Handles input
    //preventDefault stops the changeEvent so we can give Login what was given.
    const submitHandler = (e) => {
        e.preventDefault();

        Login(details.email, details.password);
    }

    //Returns a form for giving an email and password. It also has a button! 
    //Notice our form has a onSubmit attribute to the above handler. Nice!
    //Anytime we change what's in the form, we call a function that passes a ChangeEvent to our setDetails so we can can assign our details!!
    return (
        
        <form onSubmit={submitHandler}>
            
            <div className="formEntry nobottomborder">
                <h1>Welcome back!</h1>
                
                <label htmlFor="email">Email Address:</label>
                <input type="email" name="email" id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email} />
            </div>

            <div className="formEntry notopborder">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password} />
                <input id="submitButton" type="submit" value="Sign in" />
            </div>

            
        </form>
        //I NEED TO ADD FORGOT PASSWORD AND SIGN UP!!! ~Alek
    )
}

export default LoginForm;
