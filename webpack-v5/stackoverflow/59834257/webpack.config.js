const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'widget.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		library: {
			name: 'Widget',
			type: 'window',
			export: 'default',
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: false,
		}),
	],
};
