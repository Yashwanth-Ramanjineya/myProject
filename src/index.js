import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';
import Keethi from './Keerthi';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Keerthi from './Keerthi';
import MyComponent from './myComponent';
import My3rdComponent from './my3rdComponent';
import User from './User';

ReactDOM.render(

    <Router>
      <Switch>
        <Route exact path='/' component={Clock} />
        <Route exact path='/keerthi' component={Keerthi} />
        <Route exact path='/home' component={MyComponent} />
        <Route exact path='/My3rd' component={My3rdComponent} />
        <Route exact path='/user' component={User} />

      </Switch>
      </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
