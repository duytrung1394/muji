const defaultConfig = require('react-scripts/config/webpack.config.dev');

const config = {
  ...defaultConfig,
  output: {
    ...defaultConfig.output,
    // yarn build 時とパスを揃えています
    filename: 'main.js',
  }
};

export default config;