import React, { useEffect } from 'react';
import { useLoginStatus } from '../../LoginContext';
import cookie from 'react-cookies';

export default function DeleteItem({ setRemoving, href, setChange, checkChange }) {

    const { alertPrefChange } = useLoginStatus();

    useEffect(() => {

        let prevPref = cookie.load("UserPreferences");

        const removeItem = () => {
            //This shouldn't ever appear unless I messed up bad
            if(cookie.load("email") === undefined) {
                alert("Must be logged in to delete.");
                return;
            }

            const data = fetch(`http://localhost:4003/removePref?email=${cookie.load("email")}&href=${href}`);
            alertPrefChange(Math.random*92364092740);
        }
        
        removeItem();

        prevPref = prevPref.filter(ele => ele["href"] !== href);

        const month = new Date();
        month.setDate(month.getDate()+30);
        cookie.remove("UserPreferences", { path: '/', expires: month });
        cookie.save("UserPreferences", prevPref, { path: '/', expires: month });

        checkChange();
        setRemoving(false);
        setChange(true);
    }, []);

    return <></>;
}
