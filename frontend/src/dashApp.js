import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { history } from "./redux/store";
import Routes from "./routes";
import AppLocale from "./languageProvider";
import Boot from "./redux/boot";

import Hoc from './hoc';

const DashApp = () => (
  <Hoc>
    <BrowserRouter>
      <Routes history={history} />
    </BrowserRouter>
  </Hoc>
);

Boot()
  .then(() => DashApp())
  .catch(error => console.error(error));

export default DashApp;
export { AppLocale };
