import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from "../../helpers/AsyncFunc";
import customRoutes from "../../customApp/router";

const routes = [
  {
    path: "",
    component: asyncComponent(() => import("../Widgets/index.js"))
  },
  {
    path: "componentGuide",
    component: asyncComponent(() => import("../ComponentGuide"))
  },
  ...customRoutes
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={path}
              path={`${url}/${path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
