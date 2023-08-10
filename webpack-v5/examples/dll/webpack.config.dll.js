const path = require('path');
const webpack = require('webpack');

module.exports = {
	name: 'vendor',
	mode: 'development',
	entry: {
		vendor_react: ['react', 'react-dom'],
		vendor_redux: ['redux', 'react-redux'],
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: '[name]_[fullhash]',
	},
	plugins: [
		new webpack.DllPlugin({
			name: '[name]_[fullhash]',
			path: path.resolve(__dirname, 'dist/manifest.json'),
		}),
	],
};
