import React from "react";
import ReactDOM from "react-dom";
import DashApp from "./dashApp";
import registerServiceWorker from "./registerServiceWorker";

import "./main.less";

ReactDOM.hydrate(<DashApp />, document.getElementById("root"));

// Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept("./dashApp.js", () => {
//     const NextApp = require("./dashApp").default;
//     ReactDOM.hydrate(<NextApp />, document.getElementById("root"));
//   });
// }
// registerServiceWorker();
