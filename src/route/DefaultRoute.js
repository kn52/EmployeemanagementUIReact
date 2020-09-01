import {Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import history from '../utility/history';
import Employee from '../component/Employee';
import DashBoard from '../component/DashBoard';
import Login from '../component/Login';

export default function DefaultRoute () {
    return (
        <Router history={history}>
            <Switch>
                <Route path={"/employee/add"} exact component={Employee}/>
				<Route path={"/employee/edit"} exact component={Employee}/>
                <Route path={"/employee/login"} exact component={Login}/>
                <Route path={"/"} exact component={DashBoard}/>                
            </Switch>
        </Router>
    );
}