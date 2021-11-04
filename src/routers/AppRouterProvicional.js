
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';


import React from 'react'
import { LoginScreen } from '../components/auth/LoginScreen'
import { TrashitScreen } from '../components/trashit/TrashitScreen'

export  function AppRouterProvicional() {
    return (
        <Router>
            <div className="appRouter">
                <Switch>
                    <Route 
                        exact
                        path="/auth"
                        component={ LoginScreen }
                    />
                    <Route 
                        path="/"
                        component={ TrashitScreen }
                    />
                </Switch>
            </div>
        </Router>
    )
}
