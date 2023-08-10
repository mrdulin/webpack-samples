const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	name: 'app',
	mode: 'development',
	dependencies: ['vendor'],
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '',
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, 'dist'),
		},
		hot: true,
    host: '0.0.0.0'
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
			context: path.resolve(__dirname),
			manifest: path.resolve(__dirname, 'dist/manifest.json'),
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new AddAssetHtmlPlugin({ glob: path.resolve(__dirname, './dist/vendor_*.js') }),
		new webpack.ProgressPlugin(),
	],
};
