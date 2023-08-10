const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = [
	{
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
	},
	{
		name: 'app',
		mode: 'development',
		dependencies: ['vendor'],
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'dist'),
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: [
								[
									'@babel/preset-env',
									{
										targets: 'defaults',
									},
								],
								'@babel/preset-react',
							],
						},
					},
				},
			],
		},
		plugins: [
			new webpack.DllReferencePlugin({
				context: path.resolve(__dirname, 'dist'),
				manifest: path.resolve(__dirname, 'dist/manifest.json'),
			}),
			new HtmlWebpackPlugin({
				template: './src/index.html',
			}),
		],
	},
];
