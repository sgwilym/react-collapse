'use strict';


var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');


module.exports = {
  devtool: 'source-map',
  entry: './src/example/Example.js',
  output: {filename: 'bundle.js', path: path.resolve('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],

  module: {
    loaders: [
      {test: /\.json$/, loader: 'json', include: [path.resolve('src')]},
      {test: /\.js$/, loader: 'babel', include: [path.resolve('src')]}
    ]
  },
  resolve: {extensions: ['', '.js']},
  stats: {colors: true}
};
