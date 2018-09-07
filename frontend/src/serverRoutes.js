import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { Route, StaticRouter } from 'react-router-dom';
import asyncComponent from "./helpers/AsyncFunc";

//import routes from './router';

const router = express.Router();

router.get('/', (req, res) => {
  let context = {};

  ReactDOMServer.renderToNodeStream(
    <Layout>
      <StaticRouter location={req.url} context={context}>
        <Route
          exact
          path={"/"}
          component={asyncComponent(() => require("./home.js") )}
        />
      </StaticRouter>
    </Layout>
  ).pipe(res);
});

router.get('/about', (req, res) => {
  let context = {};

  ReactDOMServer.renderToNodeStream(
    <Layout>
      <StaticRouter location={req.url} context={context}>
        <Route
          exact
          path={"/about"}
          component={asyncComponent(() => require("./about.js") )}
        />
      </StaticRouter>
    </Layout>
  ).pipe(res);
});

const Layout = (props) => {
  return (
    <html lang='ja'>
      <head>
        {/* ここでmetaタグの切り替えやAMP用のhtml出力の切り替えを行う、今回は具体例は省略 */}
        <meta charSet="utf-8" />
        <title>Muji EC</title>
        <style>{props.style}</style>
      </head>
      <body>
        <div id='root'>{props.children}</div>
        <script id='initial-data' type='text/plain' data-json={JSON.stringify(props.initialData)}></script>
        {
          props.bundles ?
            props.bundles.map(bundle => <script key={bundle} type='text/javascript' src={bundle}></script>)
            :
            <script type='text/javascript' src='/main.js'></script>
        }
      </body>
    </html>
  )
}

module.exports = router;