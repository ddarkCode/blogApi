const { join, resolve } = require('path');
const { merge } = require('webpack-merge');

const webpackBase = require('./webpack.base');

const config = {
  entry: join(__dirname, 'views', 'views.js'),
  output: {
    filename: 'viewsBundle.js',
    path: resolve(__dirname, 'public'),
  },
};

module.exports = merge(webpackBase, config);
