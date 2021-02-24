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
    const logOut = () => {
        toggleOffLoginStatus();    
    }

    //Returns logOut()
    return (
        <>
            {logOut()}
        </>
        
    )
}

