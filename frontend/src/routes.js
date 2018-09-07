import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes = (props) => (
  <Switch>
    <Route
      exact
      path="/"
      component={ require("./home.js").default }
    />
    <Route
      exact
      path="/about"
      component={ require("./about.js").default }
    />
  </Switch>
);

export default Routes;
