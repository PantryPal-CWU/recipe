/*
File: LoginContext.js
?: LoginContext handles the state of the user and being logged into the website.
To do this, we use cookie to maintain updated memory. Otherwise, components won't be able to share the same state
*/ 
import React, { useContext, useState, useEffect } from 'react'
import cookie from 'react-cookies';

//Create context for our login status 
const LoginContext = React.createContext();


export function useLoginStatus() {

    return useContext(LoginContext);
}

//This is going to be wrapping App.js, so think of children as App and its kids!
export function LoginStatusProvider({ children }) {

    //cookie.load returns either the value of the cookie via passed key or undefined.
    //So, we can use that as a boolean! 
    //That means loginStatus is going to either be the value of cookie (key=email) or undefined
    const [loginStatus, setLoginStatus] = useState(cookie.load("email"));

    //Set expiration to be a month, ~30 days from today
    let month = new Date();
    month.setDate(month.getDate()+30);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`http://localhost:4001/loginstatus?email=${cookie.load("email")}`);
            const award = await res.json().then(data => {
                if(!data && cookie.load("email") !== undefined) {
                    
                    cookie.remove("email", { path: '/', expires: month});
                    
                    setLoginStatus();
                    window.location.reload(false);
                }
            });
        };
        fetchData();
       
    }, []);
    
    //This function sets up a cookie to keep track if the user is logged in
    const toggleLoginStatus = (email) => {
        cookie.remove("email");
        
        //save cookie
        //if you want to view the cookie:
        //Go to your browser's developer tools
        //Access Application (I use Chrome)
        //Then select cookies for http://localhost:3000
        cookie.save('email', email, { path: '/', expires: month});
        
        //Since we are now logged in, we can just set the login status again which will load the cookie's value!
        setLoginStatus();
        
        
    };

    //Logging off is a lot simpler, just remove the cookie and try to load the cookie (setting login status to undefined)
    const toggleOffLoginStatus = () => {
        cookie.remove("email");
        setLoginStatus();
        
    }

    //Outwrapper Login.Context.Provider passes the values of loginStatus, toggleLoginStatus, and toggleOffLoginStatus to children
    return (
        <>
            <LoginContext.Provider value={{ loginStatus, toggleLoginStatus, toggleOffLoginStatus }}>
                
                {children}
                
            </LoginContext.Provider>
        </>
    )

}