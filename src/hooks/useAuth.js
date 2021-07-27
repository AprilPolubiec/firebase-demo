import React, { useContext, useState, useEffect } from 'react'

import { auth } from "../firebase"

const AuthContext = React.createContext()

const Auth = ({ children }) => {
    const [user, setUser] = useState(auth.currentUser);
    const [authLoaded, setAuthLoaded] = useState(false);

    useEffect(() => {
        const authListener = auth.onAuthStateChanged((user) => {
            setUser(user)
            setAuthLoaded(true)
        })
        return () => authListener()
    }, [])

    const handleSignOut = () => {
        return auth.signOut();
    }

    const context = {
        user,
        authLoaded,
        handleSignOut
    }

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}

//Auth wrapper component
export default Auth;

// useAuth hook
export const useAuth = () => {
    const auth = useContext(AuthContext)
    if (!auth) {
        throw new Error('You must call useAuth() inside of a <Auth />.')
    }
    return auth;
}