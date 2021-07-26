import React from 'react'

import Button from "@material-ui/core/Button"

import { auth } from "../firebase"

export default function Home() {
    const handleSignOut = () => {
        return auth.signOut();
    }
    return <>
        <Button variant="contained" color="primary" onClick={handleSignOut}>Sign Out</Button>
    </>
}