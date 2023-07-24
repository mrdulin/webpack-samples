const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	output: {
		filename: 'main.js',
		clean: true,
	},
	experiments: {
		outputModule: true,
	},
	externals: {
		constants: 'module constants',
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: './src/constants.js' }],
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			scriptLoading: 'module',
		}),
	],
};
