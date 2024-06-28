const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devServer: {
		static: path.join(__dirname, 'dist'),
		port: 3000,
	},
	output: {
		publicPath: 'http://localhost:3000/',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					presets: ['@babel/preset-react'],
				},
			},
		],
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'consumer_app',
			remotes: {
				provider_app: 'provider_app@http://localhost:3001/remoteEntry.js',
			},
			shared: {
				react: {
					eager: true,
				},
			},
		}),
		new HtmlWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
