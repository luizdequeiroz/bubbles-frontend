import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import routes from './routes';

function Index() {
    return <HashRouter>
        <Switch>
            {routes.map(route => <Route {...route} />)}
        </Switch>
    </HashRouter>;
}

export default Index;
