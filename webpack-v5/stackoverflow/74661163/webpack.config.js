const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		clean: true,
	},
	plugins: [
		new CopyPlugin({
			patterns: [{ from: path.resolve(__dirname, './src/styles'), to: 'lib' }],
		}),
	],
};
