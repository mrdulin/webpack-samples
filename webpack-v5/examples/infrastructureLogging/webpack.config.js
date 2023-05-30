const path = require('path');
const webpack = require('webpack');

const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  infrastructureLogging: {
    debug: /Progress/
  },
  plugins: [
    new webpack.ProgressPlugin(handler),
  ]
};
