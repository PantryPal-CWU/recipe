import React, { useContext, useState } from 'react'
import cookie from 'react-cookies';

const LoginContext = React.createContext();
const LoginUpdateContext = React.createContext();

export function useLoginStatus() {

    return useContext(LoginContext);
}

export function useLoginUpdateStatus() {
    return useContext(LoginUpdateContext);
}

export function LoginStatusProvider({ children, status }) {
    const [loginStatus, setLoginStatus] = useState(cookie.load("email"));

    const toggleLoginStatus = (email) => {
        var month = new Date();
        month.setDate(month.getDate()+30);


        cookie.save('email', email, { path: '/', expires: month});
        
        setLoginStatus()
        
    };

    const toggleOffLoginStatus = () => {
        cookie.remove("email");
        setLoginStatus();
        
    }
    
    const updateLogin = () => {
        return ((cookie.get("email") !== "") ? true : false);
    } 

    return (
        <>
            <LoginContext.Provider value={{ loginStatus: cookie.load("email"), toggleLoginStatus, toggleOffLoginStatus }}>
                <LoginUpdateContext.Provider value={ toggleLoginStatus, toggleOffLoginStatus }>
                    {children}
                </LoginUpdateContext.Provider>
            </LoginContext.Provider>
        </>
    )

}