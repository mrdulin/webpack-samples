const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');
const port = 3000;

const env = 'dev';

const scripts = {
  dev: {
    react: '<script src="https://cdn.bootcss.com/react/16.2.0/umd/react.development.js"></script>',
    'react-dom': '<script src="https://cdn.bootcss.com/react-dom/16.2.0/umd/react-dom.development.js"></script>',
    'react-router-dom': '<script src="https://cdn.bootcss.com/react-router-dom/4.2.2/react-router-dom.js"></script>'
  },
  prod: {
    react: '<script src="https://cdn.bootcss.com/react/16.2.0/umd/react.production.min.js"></script>',
    'react-dom': '<script src="https://cdn.bootcss.com/react-dom/16.2.0/umd/react-dom.production.min.js"></script>',
    'react-router-dom': '<script src="https://cdn.bootcss.com/react-router-dom/4.2.2/react-router-dom.min.js"></script>'
  }
};

console.log(path.resolve(__dirname, '../node_modules'));

const config = {
  entry: {
    app: src,
    vendor: ['react', 'react-dom', 'react-router-dom']
  },
  output: {
    path: dist,
    filename: '[name].js',
    pathinfo: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  externals: {
    //key是require时传入的模块标识
    //value表示的是如何在global（即window）中访问到该对象，例如jQuery, Chart, React, ReactDOM
    react: 'React',
    'react-dom': 'ReactDOM',
    'react-router-dom': 'ReactRouterDOM'
  },
  plugins: [
    new CleanWebpackPlugin(dist),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new HtmlWebpackPlugin({
      template: src + '/index.html',
      scripts: scripts[env]
    })
  ],
  devServer: {
    port,
    host: '0.0.0.0'
  }
};

module.exports = config;
