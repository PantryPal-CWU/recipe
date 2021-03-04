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

    const saveRecipe = () => {
        setSaving(true);
    }

    const removeRecipe = () => {
        setRemoving(true);
    }

    return (
        (!isSaving && !isRemoving) ? 
        <>
            <div className="resultItems">
                <a className="resultItemsLink" href={hrefLink}>
                    <span className="resultItem">{item}</span>
                </a>
                {(cookie.load("email") !== undefined) ? 
                ((!JSON.stringify(cookie.load("UserPreferences")).includes(item)) ? <button className="saveButton" onClick={saveRecipe}>Save</button> 
                :
                <button className="removeButton" onClick={removeRecipe}>Remove</button>)
                : <></>}
            </div>
            
        </>
        :
        ((isSaving) ? 
        <SaveItem setSaving={setSaving} item={item} href={hrefLink} />
        : <DeleteItem setRemoving={setRemoving} item={item} href={hrefLink} />)
        
    )
}
