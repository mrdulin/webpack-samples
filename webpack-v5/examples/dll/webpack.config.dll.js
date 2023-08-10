const path = require('path');
const webpack = require('webpack');

module.exports = {
	name: 'vendor',
	mode: 'development',
	entry: ['react', 'react-dom'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'vendor.js',
		library: 'vendor_[fullhash]',
	},
	plugins: [
		new webpack.DllPlugin({
			name: 'vendor_[fullhash]',
			path: path.resolve(__dirname, 'dist/manifest.json'),
		}),
	],
};
