const glob = require('glob');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: {
		scripts: glob.sync('./src/js/*.js'),
		styles: glob.sync('./src/css/*.css'),
	},
	output: {
		path: path.resolve(__dirname, 'assets'),
		filename: '[name].bundle.min.js',
		clean: true,
	},
	resolve: {
		preferRelative: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin({ filename: '[name].bundle.min.css' })],
};
