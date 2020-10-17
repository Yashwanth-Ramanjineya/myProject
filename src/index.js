import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Clock from "./Clock";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Keerthi from "./Keerthi";
import MyComponent from "./myComponent";
import My3rdComponent from "./my3rdComponent";
import User from "./User";
import My2ndComponent from "./My2ndComponent";
import Date2 from "./Date2";
import Date3 from "./Date3";
import { createStore } from "redux";
import todoReducer from "./reducers";
import { Provider } from "react-redux";
import history from './historyComp'

const store = createStore(todoReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Clock} />
        <Route exact path="/keerthi" component={Keerthi} />
        <Route exact path="/home" component={MyComponent} />
        <Route exact path="/My3rd" component={My3rdComponent} />
        <Route exact path="/user" component={User} />
        <Route exact path="/function" component={My2ndComponent} />
        <Route exact path="/date" component={Date2} />
        <Route exact path="/array" component={Date3} />
      </Switch>
    </Router>
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
