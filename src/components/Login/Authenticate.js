import React, { useEffect } from 'react'
import { useLoginStatus } from '../../LoginContext';

export default function Authenticate(props) {
    //Get ability to change loginStatus (from LoginContext) 
    const { toggleLoginStatus } = useLoginStatus();
     
    useEffect(() => {
        const fetchData = async () => {
            //Will have to change sometime
            const res = await fetch(`http://localhost:4001/authenticate?email=${props.email}&password=${props.password}`)
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
