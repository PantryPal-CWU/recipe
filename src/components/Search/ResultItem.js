/*
File: ResultItem.js
?: These hold the link and recipe title. Listed in Search.js
*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import SaveItem from './SaveItem';
import DeleteItem from './DeleteItem';

import './ResultItem-styling.css';

export default function ResultItem({ item, hrefLink }) {

    const [isSaving, setSaving] = useState(false);
    const [isRemoving, setRemoving] = useState(false);
    const [change, setChange] = useState(false);
    const [text, setText] = useState("Save");
    

    const [changed, setChanged] = useState(true);

    useEffect(() => {
        
        const showSave = async () => {
            let showSaveRes = true;
            // if(change) return true;
            const pref = await axios.get(`http://localhost:4003/getPref?email=${cookie.load("email")}`)
                        .then(data => data['data'])

            const prefArray = Object.keys(pref);
            for(let i in prefArray) {
                if (pref[i]['href'] === hrefLink) showSaveRes = false;
            }
            setChanged(showSaveRes);
        }
        showSave();
        // const showSaveRes = await showSave();
        // console.log(showsaveRes)
        // setChanged(showSaveRes);
    }, []);

    const saveRecipe = () => {
        setSaving(true);
    }

    const removeRecipe = () => {
        setRemoving(true);
    }

    const checkChange = () => { 
        setChanged(JSON.stringify(cookie.load("UserPreferences")).includes('"' + hrefLink.trim() + '"') || change);
        console.log({changed: changed , includesHref: JSON.stringify(cookie.load("UserPreferences")).includes('"' + hrefLink.trim() + '"')});
    
    }

    return (
        (!isSaving && !isRemoving) ? 
        <>
            <div className="resultItems">
                <a className="resultItemsLink" href={hrefLink} target="_blank" rel="noopener noreferrer">
                    <span className="resultItem">{item}</span>
                </a>
                {(cookie.load("email") !== undefined) ? 
                    ((changed) ?
                        <button className="saveButton" onClick={saveRecipe}>Save</button>
                        :
                        <button className="saveButton" onClick={removeRecipe}>Remove</button>
                    )
                : <></>}
            </div>
            
        </>
        :
        ((isSaving) ? 
            <SaveItem setSaving={setSaving} setChange={setChange} change={change} checkChange={checkChange} setText={setText} item={item} href={hrefLink} />
            : 
            <DeleteItem setRemoving={setRemoving} setChange={setChange} checkChange={checkChange} href={hrefLink} />
        )
        
    )
}
