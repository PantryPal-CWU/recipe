import React, { useEffect } from 'react';
import { useLoginStatus } from '../../LoginContext';
import cookie from 'react-cookies';

export default function SaveItem({ setSaving, item, href }) {

    const { alertPrefChange } = useLoginStatus();

    useEffect(() => {
        const saveItem = () => {
            if(cookie.load("email") === undefined) {
                alert("Must be logged in to save.");
                return;
            }

            if(JSON.stringify(cookie.load("UserPreferences")).includes('"' + item.trim() + '"')) {
                
                alert("Item already saved");
                return;
            }
            // alert(JSON.stringify(cookie.load("UserPreferences")));
            // alert(JSON.stringify(cookie.load("UserPreferences")).includes('"' + item + '"'));
            // alert(item);
            const data = fetch(`http://localhost:4003/savePref?email=${cookie.load("email")}&title=${item}&href=${href}`);
            //Trigger cookie change
            alertPrefChange((Math.random*92364092740));
        };


        saveItem();
        setSaving(false);
    }, []);

    return <></>;
}
