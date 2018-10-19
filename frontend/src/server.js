import express from "express";
import manifest from "express-manifest";
import path from "path";

const app = express();
const renderer = require("./serverRenderer");

app.use(renderer);

if (process.env.NODE_ENV !== "production") {
  const webpack = require("webpack");
  const webpackDevMiddleware = require("webpack-dev-middleware");

  const compiler = webpack(require("./webpack.config.express.js").default);

  const wdm = webpackDevMiddleware(compiler, {
    // options
  });
  app.use(wdm);

  // main.css系の処置
  // 注: yarn build であらかじめプロダクション用のbuildディレクトリを生成している必要がある
  try {
    const fs = require("fs");
    const assetManifest = JSON.parse(
      fs.readFileSync("build/asset-manifest.json")
    );
    const mainCSS = fs.readFileSync("build/" + assetManifest["main.css"]);
    app.get("/main.css", function(req, res) {
      res.setHeader("Content-type", "text/css");
      res.send(mainCSS);
    });
  } catch (err) {
    console.error(
      "Please run `yarn build` before `yarn dev` to create main.css."
    );
  }
} else {
  app.use(
    manifest({
      manifest: path.join(__dirname, "../build/asset-manifest.json"),
      prepend: path.join(__dirname, "../build"),
      reqPathFind: /^(\/?)/,
      reqPathReplace: "",
      debug: false
    })
  );
}

app.listen(3000);
