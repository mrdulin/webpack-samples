const { join } = require('../util');
const getIPv4 = require('./scripts/ip');
const child_process = require('child_process');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const util = require('util');
const { IPv4 } = getIPv4();
const ip = IPv4;

const port = {
  devServer: 3000,
  weinre: 3001
};
child_process
  .exec(
    `weinre --verbose --httpPort ${port.weinre} --boundHost -all- --verbose`
  )
  .stdout.pipe(process.stdout);

let config = {
  entry: {
    app: join('app')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: join('dist'),
    pathinfo: true,
    publicPath: `http://${IPv4}:${port.devServer}`
  },
  devServer: {
    contentBase: './',
    port: port.devServer,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist', 'build'], {
      root: process.cwd()
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      filename: 'index.html',
      inject: {
        weinreTargetScript: `http://${ip}:${
          port.weinre
        }/target/target-script-min.js#anonymous`
      }
    })
  ]
};

module.exports = config;
