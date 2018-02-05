const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  // Entry points to the project
  entry: {
    main: [
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',
      './src/views/Main.js',
    ],
  },
  // Server Configuration options
  devServer: {
    contentBase: 'src/', // Relative directory for base of server
    hot: true, // Live-reload
    inline: true,
    port: 2018, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server

    historyApiFallback: {
      index: 'index.html'
    }
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'build'), // Path of output file
    filename: 'Main.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
};

module.exports = config;
