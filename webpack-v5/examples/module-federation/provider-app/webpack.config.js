const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	devServer: {
		static: path.join(__dirname, 'dist'),
		port: 3001,
	},
	output: {
		publicPath: 'http://localhost:3001/',
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
			name: 'provider_app',
			library: { type: 'var', name: 'provider_app' },
			filename: 'remoteEntry.js',
			exposes: {
				'./App': './src/App',
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
