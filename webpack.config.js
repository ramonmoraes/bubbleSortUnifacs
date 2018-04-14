const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'compiled.js'
  },

  module: {
    loaders: [
      {
        test: /\*.js$,/,
        exclude: /(node_modules)/,
        loader: 'babel-loader' 
      }
    ]
  },
};