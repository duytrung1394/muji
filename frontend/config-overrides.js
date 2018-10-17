const rewireDefinePlugin = require("react-app-rewire-define-plugin");

module.exports = function override(config, env) {
  if (env === "production") {
    config.devtool = false;
  }

  config = rewireDefinePlugin(config, env, {
    "process.env": {
      REACT_APP_ENV: process.env.REACT_APP_ENV || '"development"'
    }
  });

  return config;
};
