import './Footer.css';
import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';


export function Footer() {

    return (
        <div className="footPage">
            <div className="footCont">Hello Everyone (Footer) </div>

            <div className="footRow">
                <div className="footCont">One-Link</div>
                <div className="footCont">Two-Link</div>
                <div className="footCont">three-Link</div>
            </div>
            <div className="footCont">Four - Contents</div>

        </div>
    )
}