const { override, setWebpackPublicPath } = require('customize-cra');
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = override(
  (config, env) => {
    return config;
  },
  setWebpackPublicPath('./'),
)