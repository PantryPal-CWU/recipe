import { render } from '@testing-library/react';
import React from 'react'
import { useLoginStatus } from '../../LoginContext'
import './Login.css';

export function SignOut() {
    const { toggleLoginStatus } = useLoginStatus();
    //toggleLoginStatus();

    return (
        <>
            <div className="signOut">
                <p>Have a great day!</p>
                {toggleLoginStatus()}
            </div>
        </>
        
    )
}

