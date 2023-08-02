const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: {
		home: './src/index.js',
		portfolio: './src/portfolio.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			chunks: ['home'],
			minify: false,
		}),
		new HtmlWebpackPlugin({
			filename: 'portfolio.html',
			template: 'src/portfolio.html',
			chunks: ['portfolio'],
			minify: false,
		}),
	],
};
