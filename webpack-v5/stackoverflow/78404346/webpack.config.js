const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		print: './src/print.js',
	},
	devtool: 'source-map',
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	plugins: [new HtmlWebpackPlugin({ title: 'Development' })],
	devServer: {
		static: './dist',
		client: {
			overlay: true,
		},
	}
};
