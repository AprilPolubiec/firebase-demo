import React, { useState } from 'react'

import Button from "@material-ui/core/Button"
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';

import { auth, signInWithGoogleProvider } from "../firebase"

export default function Landing() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { id, value } = e.target
        switch (id) {
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleSignIn = () => {
        // TODO: make sure to enable this in firebase dash
        return auth.signInWithEmailAndPassword(email, password).then(r => console.log(r)).catch(e => setError(e.message))
    }

    const handleSignUp = () => {
        // TODO: make sure to enable this in firebase dash
        return auth.createUserWithEmailAndPassword(email, password).catch(e => setError(e.message))
    }

    return (
        <div id="landing">
            <div className="auth">
                <TextField id="email" label="Email" variant="outlined" value={email} onChange={handleChange} />
                <TextField id="password" label="Password" type="password" variant="outlined" value={password} onChange={handleChange} />
                <Button variant="contained" color="primary" onClick={handleSignIn}>
                    Sign In
                </Button>
                <Button variant="contained" color="primary" onClick={signInWithGoogleProvider}>
                    Sign In with Google
                </Button>
                <Button variant="outlined" color="primary" onClick={handleSignUp}>
                    Sign Up
                </Button>
            </div>
            <Snackbar open={error.length > 0} autoHideDuration={5000} message={error} onClose={() => setError("")} />
        </div>
    )
}
