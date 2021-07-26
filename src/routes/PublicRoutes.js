import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Landing from '../pages/Landing'

export default function PublicRoutes() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'><Landing /></Route>
            </Switch>
        </Router>
    )
}
