var path = require('path');
var webpack = require('webpack');
var env = process.env.NODE_ENV || 'dev'
var config = require('./web.config.js')[env];

module.exports = {
  entry: './main.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
    port: config.port,
    host: "0.0.0.0",
    disableHostCheck: true
  },
};
