const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	module: {
		rules: [{ test: /\.svg$/, type: 'asset/source' }],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
};
