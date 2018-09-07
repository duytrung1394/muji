import React from "react";
import { Switch, Route } from "react-router-dom";
import asyncComponent from "./helpers/AsyncFunc";

const Routes = (props) => (
  <Switch>
    <Route
      exact
      path="/"
      component={ asyncComponent(() => require("./home.js") ) }
    />
    <Route
      exact
      path="/about"
      component={asyncComponent(() => require("./about.js") )}
    />
  </Switch>
);

export default Routes;
