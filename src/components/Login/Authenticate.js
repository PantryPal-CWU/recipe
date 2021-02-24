/*
File: Authenticate.js
?: React function that checks if a login/password matches UserBase
*/
import React, { useEffect } from 'react'
import { useLoginStatus } from '../../LoginContext';

export default function Authenticate (props) {
    //Get ability to change loginStatus (from LoginContext) 
    const { toggleLoginStatus } = useLoginStatus();
    
    //Check if email and password match UserBase
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:4003/authenticate?email=${props.email}&password=${props.password}`);
            const data = await res.json().then(data => {
                if(!data) {
                    alert("Incorrect login");
                    props.setCheck(false);
                    window.location.reload(false);
                } else {
                    toggleLoginStatus(props.email);
                    alert("Welcome!");
                    window.location.reload(false);
                }
            });
        };

        fetchData();
    }, []);

    return <></>;
}
