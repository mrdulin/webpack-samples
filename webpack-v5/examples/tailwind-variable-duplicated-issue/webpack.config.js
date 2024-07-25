const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
