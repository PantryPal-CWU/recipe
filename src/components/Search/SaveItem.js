import React, { useEffect } from 'react';
import { useLoginStatus } from '../../LoginContext';
import cookie from 'react-cookies';

export default function SaveItem({ setSaving, setChange, change, checkChange, setText, item, href }) {

    const { alertPrefChange } = useLoginStatus();

    useEffect(() => {

        let prevPref = cookie.load("UserPreferences");

        const saveItem = () => {
            //Shouldnt see
            if(cookie.load("email") === undefined) {
                alert("Must be logged in to save.");
                return;
            }
            //Also shouldnt see
            if(JSON.stringify(cookie.load("UserPreferences")).includes(href) || change) {
                alert("Item already saved");
                return;
            }
            
            const data = fetch(`http://localhost:4003/savePref?email=${cookie.load("email")}&title=${item}&href=${href}`);
            //alert prefrence change
            alertPrefChange(Math.random*92364092740);

            
            
            setChange(true);
            setText("Saved");
        };

        saveItem();

        prevPref = prevPref.filter(ele => ele["href"] !== href);

        const month = new Date();
        month.setDate(month.getDate()+30);
        cookie.remove("UserPreferences", { path: '/', expires: month });
        cookie.save("UserPreferences", prevPref, { path: '/', expires: month });

        checkChange();
        setSaving(false);
        
    }, []);

    return <></>;
}
