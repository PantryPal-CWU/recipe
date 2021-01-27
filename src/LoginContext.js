import React, { useContext, useState } from 'react'

const LoginContext = React.createContext();
const LoginUpdateContext = React.createContext();

export function useLoginStatus() {
    return useContext(LoginContext);
}

export function useLoginUpdateStatus() {
    return useContext(LoginUpdateContext);
}

export function LoginStatusProvider({ children, status }) {
    const [loginStatus, setLoginStatus] = useState(true);

    function toggleLoginStatus() {
        setLoginStatus(prev => !prev);
        console.log({loginStatus});
    }
    
    return (
        <>
            <LoginContext.Provider value={{ status: loginStatus, toggleLoginStatus }}>
                <LoginUpdateContext.Provider value={toggleLoginStatus}>
                    {children}
                </LoginUpdateContext.Provider>
            </LoginContext.Provider>
        </>
    )

}