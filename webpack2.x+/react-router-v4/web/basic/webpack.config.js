const { join } = require('../../../util');
const { plugins } = require('../../../webpack.config.base');
const webpack = require('webpack');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

// console.log(require('webpack'));

let config = {
  entry: {
    app: join('app'),
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },
  output: {
    filename: 'bundles/[name].[hash:8].js',
    path: join('dist'),
    chunkFilename: '[id].[name].[hash:8].js',
    pathinfo: true,

    // 这里如果不设置publicPath，只设置historyApiFallback: true
    // 当页面停留在http://localhost:3000/topics/props-v-state时，退出webpack-dev-server
    // 重启webpack-dev-server，刷新页面时会报如下错误：
    // GET http://localhost:3000/topics/app.f4d05801.js 404 (Not Found)

    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
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
              presets: ['latest', 'react'],
              plugins: ['syntax-dynamic-import']
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // webpack2.x的CommonsChunkPlugin只接受一个对象作为参数，详见webpack/lib/optimize/CommonsChunkPlugin源码
    // new webpack.optimize.CommonsChunkPlugin('vendor', 'bundles/[name].[hash:8].js', Infinity)

    new CommonsChunkPlugin({
      name: 'vendor',
      filename: 'bundles/[name].[hash:8].js',
      minChunks: Infinity
    })

  ].concat(plugins)
};

module.exports = config;
