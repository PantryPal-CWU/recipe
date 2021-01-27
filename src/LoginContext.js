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
    const [loginStatus, setLoginStatus] = useState(false);

    const toggleLoginStatus = React.useCallback( 
        
        ()=>setLoginStatus(!loginStatus),
        [loginStatus]
    );
    
    return (
        <>
            <LoginContext.Provider value={{ loginStatus, toggleLoginStatus }}>
                <LoginUpdateContext.Provider value={toggleLoginStatus}>
                    {children}
                </LoginUpdateContext.Provider>
            </LoginContext.Provider>
        </>
    )

}