/*
File: Routing.js
?: Handles link routing/redirecting 
*/ 
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, SignOut, SignUp } from "./components/Login/index";
import Home from "./components/pages/Home";
import { useLoginStatus } from './LoginContext';
import About from "./components/About/About.js";
import Profile from './components/Profile/Profile.js';


import SearchPage from "./components/Search/Search.js";



export function Routing() {
    //To avoid a user accessing the login page while already logged in, we need the status of the login
    let { loginStatus } = useLoginStatus();

    //Returns the BrowserRouter
    //You can mimick the conditional such as login if you wanted to have a different component show up in a link
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/pages/Home.js" />

                <Route exact path="/pages/Home.js">
                    <Home />
                </Route>
            
                <Route path="/login">
                    {((loginStatus === undefined) ? <Login /> : <Redirect from='/login' to="/pages/Home.js" />)}
                    
                </Route>

                <Route path="/register">
                    {((loginStatus === undefined) ? <SignUp /> : <Redirect from='/login' to="/pages/Home.js" />)}
                </Route>

                <Route path="/signout">
                    {((loginStatus !== undefined) ? <SignOut /> : <Redirect from='/signout' to="/pages/Home.js" />)}
                    
                </Route>

                <Route path="/About/About.js">
                    <About />
                </Route>

                <Route path="/Search/Search.js">
                    <SearchPage />
                </Route>

                <Route path="/Profile/Profile.js">
                    {((loginStatus !== undefined) ? <Profile /> : <Redirect from='/Profile/Profile.js' to='/login' />)}
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

