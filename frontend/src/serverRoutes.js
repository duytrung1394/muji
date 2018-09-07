import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';

const Routes = () => renderRoutes(routes)

const router = express.Router();

const ssr = (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <Layout>
      <StaticRouter location={req.url}>
        <Routes />
      </StaticRouter>
    </Layout>
  ).pipe(res);
};

// TODO: ここのroutesループお行儀よくないので改善したい
routes.forEach( (route) => {
  let {path} = route;
  if(route.exact !== true){
    // exact じゃない場合は前方一致する
    // 例: '/about' -> '/about*'
    path = `${path}*`
  }
  router.get(path, ssr);
});

const Layout = (props) => {
  return (
    <html lang='ja'>
      <head>
        {/* ここでmetaタグの切り替えやAMP用のhtml出力の切り替えを行う、今回は具体例は省略 */}
        <meta charSet="utf-8" />
        <title>Muji EC</title>
        <style>{props.style}</style>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <div id='root'>{props.children}</div>
        {/* <script id='initial-data' type='text/plain' data-json={JSON.stringify(props.initialData)}></script> */}
        <script type='text/javascript' src='/main.js'></script>
      </body>
    </html>
  )
}

module.exports = router;