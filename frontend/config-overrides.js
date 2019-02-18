// const rewireDefinePlugin = require("react-app-rewire-define-plugin");
const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    ["import", {
      libraryName: "antd",
      libraryDirectory: "es",
      style: true
    }],
    config
  );
  
  config = injectBabelPlugin(
    ["import-static-files", {
      hash: true
    }],
    config
  );

  config = injectBabelPlugin(
    ["transform-inline-environment-variables", {
      "include": [
        "NODE_ENV",
        "API_SERVER",
        "API_BROWSER"
      ]
    }],
    config
  );
  
  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true
  })(config, env);

  config.devtool = (env === "development");

  // ビルドに含む環境変数のみに絞り込む
  // config = rewireDefinePlugin(config, env, {
  //   "process.env": {
  //     NODE_ENV: process.env.NODE_ENV,
  //     API_SERVER: process.env.API_SERVER,
  //     API_BROWSER: process.env.API_BROWSER,
  //   },
  // });

  return config;
};
