/*
File: ResultItem.js
?: These hold the link and recipe title. Listed in Search.js
*/
import React from 'react'

export default function ResultItem({ item, hrefLink }) {
    return (
        <div className="resultItems">
            {item} - <a className="resultItemsLink" href={hrefLink}>{hrefLink}</a>
        </div>
    )
}
