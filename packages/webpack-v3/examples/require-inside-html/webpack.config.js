const { join } = require('../../util');
const { plugins } = require('../../webpack.config.base');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let config = {
  entry: {
    app: join('app')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: join('dist'),
    pathinfo: true,
    publicPath: '/'
  },
  devServer: {
    contentBase: './',
    port: 3000,
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
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader'
        }
      }
    ]
  },
  plugins: plugins.concat([
    new HtmlWebpackPlugin({
      template: 'html-loader?interpolate!app/index.html',
      filename: 'index-with-require.html'
    })
  ])
};

module.exports = config;
