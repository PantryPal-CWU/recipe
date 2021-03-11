/*
File: ResultItem.js
?: These hold the link and recipe title. Listed in Search.js
*/
import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import SaveItem from './SaveItem';
import DeleteItem from './DeleteItem';

import './ResultItem-styling.css';

export default function ResultItem({ item, hrefLink }) {

    const [isSaving, setSaving] = useState(false);
    const [isRemoving, setRemoving] = useState(false);
    const [change, setChange] = useState(false);
    const [text, setText] = useState("Save");
    

    // const [changed, setChanged] = useState(true);

    // useEffect(() => {
    //     console.log(hrefLink+(!JSON.stringify(cookie.load("UserPreferences")).includes(hrefLink)));
    //     console.log(cookie.load("UserPreferences"));
    // },[]);

    const saveRecipe = () => {
        setSaving(true);
    }

    const removeRecipe = () => {
        setRemoving(true);
    }

    const checkChange = () => { 
        return (!JSON.stringify(cookie.load("UserPreferences")).includes('"' + hrefLink.trim() + '"') || change);
    }

    return (
        (!isSaving && !isRemoving) ? 
        <>
            <div className="resultItems">
                <a className="resultItemsLink" href={hrefLink} target="_blank" rel="noopener noreferrer">
                    <span className="resultItem">{item}</span>
                </a>
                {(cookie.load("email") !== undefined) ? 
                ((checkChange()) ?
                <button className="saveButton" onClick={saveRecipe}>{text}</button>
                :
                <button className="deleteButton" onClick={removeRecipe}>Remove</button>
                )
                : <></>}
            </div>
            
        </>
        :
        ((isSaving) ? 
        <SaveItem setSaving={setSaving} setChange={setChange} change={change} setText={setText} item={item} href={hrefLink} />
        : <DeleteItem setRemoving={setRemoving} setChange={setChange} href={hrefLink} />)
        
    )
}
