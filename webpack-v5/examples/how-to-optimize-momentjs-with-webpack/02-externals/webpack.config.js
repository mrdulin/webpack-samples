const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'production',
	entry: './src/index.js',
  externals: {
    moment: 'moment'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};
