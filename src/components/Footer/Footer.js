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
                <> Click </>
                <a href="../About/About.js"> Here </a>
                <> to learn more </>
            </div>

        </div>
    )
}

/**
 * <Route path="/About/About.js">
                    <About />
                </Route>
 */