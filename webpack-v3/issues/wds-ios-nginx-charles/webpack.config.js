const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const join = (modulePath) => path.join(process.cwd(), modulePath);
const port = 3000;

let config = {
  entry: {
    app: join('app')
  },
  output: {
    filename: '[name].js',
    path: join('dist'),
    pathinfo: true,
    publicPath: `http://localhost:${port}`
  },
  devServer: {
    contentBase: './app',
    historyApiFallback: true,
    inline: true,
    port,
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
              presets: ['es2015'],
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
      filename: 'index.html'
    })
  ]
};

module.exports = config;
