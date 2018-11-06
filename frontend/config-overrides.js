const rewireDefinePlugin = require("react-app-rewire-define-plugin");
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {  
  config = injectBabelPlugin (
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
    config,
  );
  config = rewireLess(config, env);

  if (env === "production") {
    config.devtool = false;
  }

  config = rewireDefinePlugin(config, env, {
    "process.env": {
      REACT_APP_ENV: process.env.REACT_APP_ENV || '"development"'
    }
  });

  return rewires(config,env);
};
