const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	mode: 'development',
	output: {
		path: path.resolve(__dirname, './public/'),
		filename: 'success/script/index.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, './src/index.html'),
			inject: 'body',
		}),
		new MiniCssExtractPlugin({ filename: 'success/style/style.css' }),
	],
};
