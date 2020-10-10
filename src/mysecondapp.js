import React, { Component } from "react";
import "./App.css";
import Clock from './Clock'
import SunithaClock from './SunithaClock';
import * as serviceWorker from './serviceWorker';
import {BrowsweRouter as Router, Route, Switch} from '.react-router-dom';

ReactDOM.render(

    <Router>
        <Switch>
            <Route path='/' component={Clock} />
            <Route path='/' Component={SunithaClock} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
serviceWorker.unregister();