const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

// webpack needs to be explicitly required
const webpack = require('webpack');
require('dotenv').config({path: './.env'});
var mode = process.env.NODE_ENV || 'development';

//entry: ["regenerator-runtime/runtime.js", "<your enter js file>"]
module.exports = {
  entry: ['regenerator-runtime/runtime.js', './src/index.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[chunkhash:8].js',
    sourceMapFilename: '[name].[chunckhash:8].map',
    chunkFilename: '[id].[chunkhash:8].js',

    // filename: 'main.js',
    // filename: "[name].js",
    // path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  externals: {
    //global app config object
    config: JSON.stringify({
      apiUrl: 'https://form-exam.herokuapp.com',
    }),
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      title: 'Your form text!',
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env)
    }),
  ],
  resolve: {
    fallback: {
      util: require.resolve('util/'),
    },
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};
