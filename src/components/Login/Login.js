

import React from 'react'
import { Link } from 'react-router-dom'
import { Login } from '..'
import './Login.css'


function login() {
    return (
        <div id='container'>
            <form>
                <label>
                    Username:
                    <input type='text' name='username' />
                </label>
                {" "}
                <label>
                    Password:
                    <input type='text' name='password' />
                </label>
                <input type='submit' value='Submit' />
            </form>
            <div id="break"></div>
            <Link to='/signup' className='signUp-link'>
                Sign Up!
            </Link>
            <div id="break"></div>
            <Link to='/forgot' className='signUp-link'>
                Forgot Password?
            </Link>
        </div>
    )
}

export default Login;