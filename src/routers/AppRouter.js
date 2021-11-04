import React, { useState } from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom';

import { TrashitScreen } from '../components/trashit/TrashitScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute} from './PublicRoute';


export default function AppRouter() {

    const [ isLoggedIn, setIsLoggedIn ] = useState( false);

    return (
        <Router>
            <div className="appRouter">
                <Switch>
                    <PublicRoute
                        path ='/auth' 
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn}
                    />
                    <PrivateRoute
                        exact
                        isAuthenticated={ isLoggedIn }
                        path='/'
                        component={ TrashitScreen}
                    />

                    <Redirect />
                </Switch>
            </div> 
        </Router>
    )
}
