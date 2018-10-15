import express from 'express';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';

import transit from 'transit-immutable-js';

import { ServerStyleSheet } from 'styled-components';

import routes from './routes';

import Hoc from './serverHoc';

import { store } from './redux/store';
import rootSaga from './redux/sagas'

const router = express.Router();

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//TODO: initialStateの取り扱いを追加してサーバーサイドで実行済みのAPIリクエストを二重にやる必要がないようにしたい

const ssr = async (req, res) => {
  const rootComp = (
    <Hoc>
      <StaticRouter location={req.url} context={{}}>
        { renderRoutes(routes ) }
      </StaticRouter>
    </Hoc>
  );

  const matchedRoutes = matchRoutes(routes, req.url);
  if( matchedRoutes.length > 1 ){
    console.warn(`the url(${req.url}) matches multiple routes.`);
  }

  const sheet = new ServerStyleSheet();
  
  store.runSaga(rootSaga).done.then(() => {
    const stream = ReactDOMServer.renderToNodeStream(
      <HTML 
        initialData={ transit.toJSON(store.getState()) }
        styleTags={ sheet.getStyleTags() }
      >
        {rootComp}
      </HTML>
      );
    stream.pipe(res);
  }).catch((e) => {
    console.warn(e.message)
    res.status(500).send(e.message)
  });
  
  ReactDOMServer.renderToStaticMarkup(rootComp);
  store.close();
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

//TODO: 実ファイルの index.html と二重定義になってるのを解消したい
const HTML = (props) => {
  return (
    <html lang='ja'>
      <head>
        {/* ここでmetaタグの切り替えやAMP用のhtml出力の切り替えを行う、今回は具体例は省略 */}
        <meta charSet="utf-8" />
        <title>Muji EC</title>
        <style>{props.style}</style>
        <link rel="stylesheet" href="/main.css" />
        {props.styleTags}
      </head>
      <body>
        <div id='root'>{props.children}</div>
        <script id='initial-data' type='text/plain' data-json={props.initialData}></script>
        <script type='text/javascript' src='/main.js'></script>
      </body>
    </html>
  )
}

module.exports = router;