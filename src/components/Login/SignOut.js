import { render } from '@testing-library/react';
import React, { useEffect } from 'react'
import { useLoginStatus } from '../../LoginContext'
import './Login.css';

export function SignOut() {
    const { loginStatus, toggleLoginStatus } = useLoginStatus();
    const clickHandle = () => {
        
        toggleLoginStatus();
        localStorage.setItem("loginStatus", loginStatus);
        console.log(localStorage.getItem("loginStatus")===true);
        
    }
    return (
        <>
            <div className="signOut">
                <p>Have a great day!</p>
                <button onClick={clickHandle}>Sign Out</button>
            </div>
        </>
        
    )
}

