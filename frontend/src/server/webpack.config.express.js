const defaultConfig = require("react-scripts/config/webpack.config.dev");

const config = {
  ...defaultConfig,
  output: {
    ...defaultConfig.output,
    // yarn build 時とパスを揃えています
    filename: "main.js"
  }
};

// babelrc読んでくれないとbuild時と食い違ってしまうので
config.module.rules[1].oneOf[1].options.babelrc = true;

export default config;
