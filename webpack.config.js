const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');


module.exports = {
  entry: './js/src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname,'build')
  },
  module: {
    rules:[
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      favicon: './favicon.ico'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname,'build'),
    compress: true,
    port: 9000
  }
}