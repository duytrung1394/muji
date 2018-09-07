const ExtractTextPlugin = require("extract-text-webpack-plugin");

// dc is for default config.
const dc = require('react-scripts/config/webpack.config.dev');

const oneOf = dc.module.rules[1].oneOf;

const config = {
  ...dc,
  output: {
    ...dc.output,
    // yarn build 時とパスを揃えています
    filename: 'main.js',
  },
  module: {
    ...dc.module,
    rules: [
      dc.module.rules[0],
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            require.resolve('style-loader'),
            require.resolve('css-loader'),
            {
              loader: require.resolve('postcss-loader'),
              options: {
                // コピーしてきただけ
                plugins: oneOf[2].use[1].options.plugins,
              }
            }
          ]
        })
      },
      {
        oneOf: oneOf,
      }
    ]
  },
  plugins: [
    ...dc.plugins,
    new ExtractTextPlugin('main.css'),
  ]
};

export default config;