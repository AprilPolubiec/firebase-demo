import React from 'react'

import { useAuth } from "../hooks/useAuth"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavBar() {
    const auth = useAuth()
    
    const handleSignOut = () => {
        auth.handleSignOut();
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    {auth.user ? <Button color="inherit" onClick={handleSignOut}>Sign Out</Button> : <></>}
                </Toolbar>
            </AppBar>
        </>
    )
}
