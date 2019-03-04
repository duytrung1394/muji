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

  if(env !== "development"){
    config.devtool = false;
  }
  

  return config;
};
