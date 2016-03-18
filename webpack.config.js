/**
 * Created by hep on 17.03.16.
 */

const isProduction = process.env.NODE_ENV === 'production';

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
        loader: "babel?presets[]=es2015"
      }
    ]
  },
  watch: !isProduction,
  watchOptions: {
    aggregateTimeout: 100
  }
};