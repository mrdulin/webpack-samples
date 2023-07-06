const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		pageA: './src/pageA.js',
		pageB: './src/pageB.js',
	},
	output: {
		filename: '[name].js',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'pageA.html',
			template: './src/pageA.html',
			chunks: ['pageA'],
		}),
		new HtmlWebpackPlugin({
			filename: 'pageB.html',
			template: './src/pageB.html',
			chunks: ['pageB'],
		}),
	],
};
