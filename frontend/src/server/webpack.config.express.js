const defaultConfig = require("react-scripts/config/webpack.config.dev");
const override = require("../../config-overrides");

const overridden = override(defaultConfig, process.env.NODE_ENV);

const config = {
  ...overridden,
  output: {
    ...overridden.output,
    // yarn build 時とパスを揃えます
    filename: "main.js"
  }
};

// babelrc読んでくれないとbuild時と食い違ってしまうので
config.module.rules[1].oneOf[1].options.babelrc = true;

export default config;
