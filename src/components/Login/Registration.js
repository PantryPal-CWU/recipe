import React, { useEffect, useState } from 'react'
import { useLoginStatus } from '../../LoginContext';

export default function Registration(props) {
    //Get ability to change loginStatus (from LoginContext) 
    const { toggleLoginStatus } = useLoginStatus();
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:4001/signup?email=${props.email}&password=${props.password}`);
            const data = await res.json().then(data => {
                if(!data) {
                    alert("Email taken!");
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
