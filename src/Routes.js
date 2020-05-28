import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from './pages/Home/Index';
import Repositories from './pages/Repositories/Index';


export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
};