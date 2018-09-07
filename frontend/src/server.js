import express from 'express';
import manifest from 'express-manifest';
import path from 'path';

const app = express();
const router = require('./serverRoutes');

app.use(router);

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  
  const compiler = webpack(require('./webpack.config.express.js').default);

  app.use(webpackDevMiddleware(compiler, {
    // options
  }));
}else{
  app.use(manifest({
    manifest: path.join(__dirname, '../build/asset-manifest.json'),
    prepend: path.join(__dirname, '../build'),
    reqPathFind: /^(\/?)/,
    reqPathReplace: '',
    debug: true,
  }));
}

app.listen(3000);
