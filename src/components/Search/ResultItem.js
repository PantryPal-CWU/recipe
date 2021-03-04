/*
File: ResultItem.js
?: These hold the link and recipe title. Listed in Search.js
*/
import React, { useState } from 'react'
import SaveItem from './SaveItem'

import './ResultItem-styling.css';

export default function ResultItem({ item, hrefLink }) {

    const [isSaving, setSaving] = useState(false);

    const saveRecipe = () => {
        setSaving(true);
    }

    return (
        (!isSaving) ? 
        <>
            <div className="resultItems">
                <a className="resultItemsLink" href={hrefLink}>
                    <span className="resultItem">{item}</span>
                </a>
                <br/>
                <button className="saveButton" onClick={saveRecipe}>Save</button>
            </div>
            
        </>
        :
        <SaveItem setSaving={setSaving} />
    )
}
