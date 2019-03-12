// 注: ここは yarn start, yarn build の時には babel を通さずに呼ばれるので import/export構文は使わないこと
const rewireDefinePlugin = require("react-app-rewire-define-plugin");
const { injectBabelPlugin } = require("react-app-rewired");
const rewireLess = require("react-app-rewire-less");

const overrideEnvNames = ["NODE_ENV", "API_SERVER", "API_BROWSER"];

module.exports = function override(config, env) {
  config = injectBabelPlugin(
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
      }
    ],
    config
  );

  config = injectBabelPlugin(
    [
      "import-static-files",
      {
        hash: true
      }
    ],
    config
  );

  config = rewireLess.withLoaderOptions({
    javascriptEnabled: true
  })(config, env);

  if (env !== "development") {
    config.devtool = false;
  }

  // 環境変数を上書き。
  const envs = {};
  for (let name of overrideEnvNames) {
    envs["process.env." + name] = JSON.stringify(process.env[name]);
  }
  config = rewireDefinePlugin(config, env, envs);
  // NOTE: transform-inline-environment-variables を使うと webpack-dev-middleware を使った時に正しく動作しないので、こちらの方法を採用しました

  return config;
};
