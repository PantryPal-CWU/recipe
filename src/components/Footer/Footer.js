import './Footer.css';
import React from 'react';
import {Card, Button} from 'react-bootstrap';
import ReactDOM from 'react-dom';


export function Footer() {

    return (
        <div className="footPage">
            <div className="footCont"> Some more information: </div>

            <div className="footRow">
                <div className="footCont">
                    <> Icon made by </>
                    <a href="https://www.flaticon.com/authors/flat-icons">Flat Icon</a>
                    <> from </>
                    <a href="https://www.flaticon.com/">www.flaticon.com</a>
                </div>
                <div className="footCont">
                    <> Check us out on 
                    <a href="https://github.com/PantryPal-CWU/recipe"> GitHub.com</a>
                    </>
                </div>
            </div>
            <div className="footCont">
                    <> Phot credit goes to
                    <a href="https://pixabay.com/users/sontung57-19733131/?tab=popular"> sontung57, </a>
                    <a href="https://pixabay.com/users/daria-yakovleva-3938704/"> Daria-Yakovleva, </a>
                    and
                    <a href="https://pixabay.com/users/lukasbieri-4664461/"> lukasbieri </a>
                    on 
                    <a href="https://pixabay.com/"> www.pixabay.com </a>
                    </>
                </div>
            <div className="footer">
            <div className="footCont">
                <> Click </>
                <a href="../About/About.js"> Here </a>
                <> to learn more </>
            </div>
            </div>

        </div>
    )
}