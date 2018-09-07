import React from "react";
import { Route } from "react-router-dom";

const Routes = () => {
  (<Route
    exact
    path={"/"}
    component={ require("./containers/Page/500") }
  />);
}

export default Routes;
