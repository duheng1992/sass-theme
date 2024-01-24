const { override, setWebpackPublicPath } = require('customize-cra');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = override(
  (config, env) => {
    if (env === "production") {
      config.output.publicPath = 'sass-theme/'
    }
    return config;
  },
)