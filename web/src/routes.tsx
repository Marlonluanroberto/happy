import { BrowserRouter, Switch, Route, RouteProps } from 'react-router-dom';
import React from 'react';
import Landing from './pages/Landing';
import OrphanangesMap from './pages/OrphanagesMap';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/app" component={OrphanangesMap} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;