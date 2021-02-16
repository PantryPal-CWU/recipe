import React, { useEffect } from 'react'
import { useLoginStatus } from '../../LoginContext';

export default function Authenticate(props) {
    //Get ability to change loginStatus (from LoginContext) 
    const { toggleLoginStatus } = useLoginStatus();
     
    useEffect(() => {
        const fetchData = async () => {
            //Will have to change sometime
            const res = await fetch(`http://localhost:4001/authenticate?email=${props.email}&password=${props.password}`)
            const data = await res.json();
            if(!data) {
                alert("Incorrect login");
            } else {
                toggleLoginStatus(props.email);
            }
            
        };

        fetchData();
        props.setCheck(false);
        window.location.reload(false);
    }, []);

    return <></>;
}
