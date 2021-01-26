import React, { useState } from 'react'
import './Login.css';



function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = (e) => {
        e.preventDefault();

        Login(details.email, details.password);
    }


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
