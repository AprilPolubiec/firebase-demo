import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from "../pages/Home"

export default function PrivateRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}
