import React, { useEffect } from 'react';
import { useLoginStatus } from '../../LoginContext';
import cookie from 'react-cookies';

export default function DeleteItem({ setRemoving, href, setChange }) {

    const { alertPrefChange } = useLoginStatus();

    useEffect(() => {
        const removeItem = () => {
            //This shouldn't ever appear unless I messed up bad
            if(cookie.load("email") === undefined) {
                alert("Must be logged in to delete.");
                return;
            }

            const data = fetch(`http://localhost:4003/removePref?email=${cookie.load("email")}&href=${href}`);
            alertPrefChange((Math.random*92364092740));
        }
        
        removeItem();
        setRemoving(false);
        setChange(true);
    }, []);

    return <></>;
}
