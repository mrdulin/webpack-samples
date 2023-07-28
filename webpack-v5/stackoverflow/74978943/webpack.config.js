const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	mode: 'production',
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			inject: false,
		}),
	],
	output: {
		clean: true,
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
		],
	},
};
