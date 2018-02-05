import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {App} from "./App";
import Dashboard from "../components/Dashboard";
import TaskList from "../components/TaskList";

const Routes = () =>(
    <Router>
        <App>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/tasklist" exact component={TaskList} />
            </Switch>
        </App>
    </Router>
)

export default Routes;