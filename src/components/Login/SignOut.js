/*
 File: SignOut.js
 ?: This page handles logging out
 */
import React from 'react';
import { useLoginStatus } from '../../LoginContext';
import './Login.css';


export function SignOut() {
    //Get the toggleOffLoginStatus method from our LoginContext
    const { toggleOffLoginStatus } = useLoginStatus();

    //Handles button, logs off
    const clickHandle = () => {
        toggleOffLoginStatus();    
    }

    //Returns a tiny little ugly thing, I'm going to change this so it just works now that I got the cookies set up.
    //Hopefully this page will be just a div and a split moment of time! 
    return (
        <>
            <div className="signOut">
                <p>Have a great day!</p>
                <button onClick={clickHandle}>Sign Out</button>
            </div>
        </>
        
    )
}

