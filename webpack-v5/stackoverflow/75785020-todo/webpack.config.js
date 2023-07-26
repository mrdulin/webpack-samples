const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: {
		chunk1: { import: './src/chunk1.js' },
		main: { import: './src/index.js' },
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
		},
	},
	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
