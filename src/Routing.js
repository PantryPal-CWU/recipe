import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from "./components/Login/Login";
import { SignOut } from "./components/Login/SignOut"
import Home from "./components/pages/Home";
import { LoginStatusProvider, useLoginStatus, useLoginUpdateStatus } from './LoginContext'
import About from "./components/About/About.js"



export function Routing() {
    var { loginStatus } = useLoginStatus();
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/pages/Home.js">
                    <Home />
                </Route>
            
                <Route path="/login">
                    {((loginStatus) ? <Login /> : <Redirect from='/login' to="/Home" />)}
                    
                </Route>

                <Route path="/signout">
                    {((!loginStatus) ? <SignOut /> : <Redirect from='/signout' to="/Home" />)}
                    
                </Route>
                <Route path="/About/About.js">
                    <About />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
