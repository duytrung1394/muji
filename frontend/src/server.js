import express from 'express';
import manifest from 'express-manifest';
import path from 'path';

const app = express();
const router = require('./serverRoutes');

app.use(manifest({
  manifest: path.join(__dirname, '../build/asset-manifest.json'),
  prepend: path.join(__dirname, '../build'),
  reqPathFind: /^(\/?)/,
  reqPathReplace: '',
  debug: true,
}));

// app.use(express.static(path.join(__dirname, '../build')));

app.use(router);
//app.use('/about', router);

app.listen(3000);

// import React from "react";
// import ReactDOM from "react-dom";
// import DashApp from "./dashApp";
// import registerServiceWorker from "./registerServiceWorker";
// import "antd/dist/antd.css";

// ReactDOM.render(<DashApp />, document.getElementById("root"));

// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept("./dashApp.js", () => {
//     const NextApp = require("./dashApp").default;
//     ReactDOM.render(<NextApp />, document.getElementById("root"));
//   });
// }
// registerServiceWorker();
