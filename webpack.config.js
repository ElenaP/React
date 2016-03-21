/**
 * Created by hep on 17.03.16.
 */

const isProduction = process.env.NODE_ENV === 'production';
const webpack = require('webpack');

module.exports = {
  devtool: isProduction ? 'eval' : 'inline-source-maps',
  entry: './main',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "babel?presets[]=es2015,plugins[]=transform-es2015-modules-commonjs"
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  watch: !isProduction,
  watchOptions: {
    aggregateTimeout: 100
  }
};