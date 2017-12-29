const { join } = require('../util');
const { plugins } = require('../webpack.config.base');
require('isomorphic-fetch');
const serverConfig = require('./config');

const apiHost = {
  github: 'https://github.com',
  api: 'https://api.github.com'
};

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}

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
    host: '0.0.0.0',
    before(app) {
      app.get('/login', function(req, res) {
        const url = 'http://data.gate.io/api2/1/ticker/doge_usdt';
        fetch(url)
          .then(response => {
            if (response.status >= 400) {
              throw new Error('Bad response from server');
            }
            return response.json();
          })
          .then(response => {
            res.json(response);
          });
      });

      app.get('/t1', function(req, res) {
        // console.log('req.query: ', req.query);
        res.json({ name: 't1' });
      });

      app.get('/github', function(req, res) {
        const referrer = req.get('Referrer');
        console.log('referrer: ', referrer);
        const params = queryParams({
          client_id: serverConfig.ClientID,
          state: serverConfig.state
        });
        const url = apiHost.github + '/login/oauth/authorize?' + params;
        res.redirect(url);
      });
      //81b2f255e7afc16801e171de52f37a3633c28761
      app.get('/oauth', function(req, res) {
        console.log('query: ', req.query);
        const code = req.query.code;
        const state = req.query.state;
        const headers = req.headers;
        const params = queryParams({
          client_id: serverConfig.ClientID,
          client_secret: serverConfig.ClientSecret,
          code,
          state: serverConfig.state
        });
        headers.host = 'github.com';
        headers['Accept'] = 'application/json';
        const url = apiHost.github + '/login/oauth/access_token?' + params;
        fetch(url, {
          method: 'POST',
          headers
        })
          .then(response => response.json())
          .then(response => {
            const { access_token, scope } = response;
            return fetch(apiHost.api + '/user', {
              headers: {
                Authorization: 'token' + ' ' + access_token
              }
            });
          })
          .then(response => response.json())
          .then(response => {
            res.json(response);
          })
          .catch(e => {
            console.error(e);
          });
      });
    }
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
  plugins: plugins
};

module.exports = config;
