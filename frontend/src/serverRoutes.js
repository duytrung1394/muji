import express from "express";

import React from "react";
import ReactDOMServer from "react-dom/server";

import { StaticRouter } from "react-router-dom";
import { matchRoutes, renderRoutes } from "react-router-config";

import routes from "./routes";

import Hoc from "./serverHoc";

const router = express.Router();

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const ssr = async (req, res) => {
  const matchedRoutes = matchRoutes(routes, req.url);
  if (matchedRoutes.length > 1) {
    console.warn(`the url(${req.url}) matches multiple routes.`);
  }
  const route = matchedRoutes[0].route;
  let extraProps = {};
  if (typeof route.component.getInitialProps == "function") {
    extraProps = await route.component.getInitialProps();
  } else {
    console.warn(
      `matched Component(${
        route.component
      }) should implements getInitialProps static function.`
    );
  }

  ReactDOMServer.renderToNodeStream(
    <Layout>
      <Hoc>
        <StaticRouter location={req.url}>
          {renderRoutes(routes, extraProps)}
        </StaticRouter>
      </Hoc>
    </Layout>
  ).pipe(res);
};

// TODO: ここのroutesループお行儀よくないので改善したい
routes.forEach(route => {
  let { path } = route;
  if (route.exact !== true) {
    // exact じゃない場合は前方一致する
    // 例: '/about' -> '/about*'
    path = `${path}*`;
  }
  router.get(path, ssr);
});

//TODO: 実ファイルの index.html と二重定義になってるのを解消したい
const Layout = props => {
  return (
    <html lang="ja">
      <head>
        {/* ここでmetaタグの切り替えやAMP用のhtml出力の切り替えを行う、今回は具体例は省略 */}
        <meta charSet="utf-8" />
        <title>Muji EC</title>
        <style>{props.style}</style>
        <link rel="stylesheet" href="/main.css" />
      </head>
      <body>
        <div id="root">{props.children}</div>
        {/* <script id='initial-data' type='text/plain' data-json={JSON.stringify(props.initialData)}></script> */}
        <script type="text/javascript" src="/main.js" />
      </body>
    </html>
  );
};

module.exports = router;
