/*
 File: SignOut.js
 ?: This page handles logging out
 */
import React, { useEffect } from 'react';
import { useLoginStatus } from '../../LoginContext';
import cookie from 'react-cookies';
import './Login.css';


export function SignOut() {
    //Get the toggleOffLoginStatus method from our LoginContext
    const { toggleOffLoginStatus } = useLoginStatus();

    //Fetch /signout and mark the user on UserBase as logged off and set login status to false (equivalent)
    useEffect(() => {
        const signOff = async () => {
            if(cookie.load("email") !== undefined) {
                const res = await fetch(`http://localhost:4003/signout?email=${cookie.load("email")}`);
            }   
        }
        signOff();
        toggleOffLoginStatus();
    }, []);

    return <></>;
}

