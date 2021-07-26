import React from 'react'

import Button from "@material-ui/core/Button"

export default function Landing() {
    return (
        <div id="landing">
            <div className="auth">
                <Button variant="contained" color="primary">
                    Sign In
                </Button>
                <Button variant="outlined" color="primary">
                    Sign Up
                </Button>
            </div>
        </div>
    )
}
