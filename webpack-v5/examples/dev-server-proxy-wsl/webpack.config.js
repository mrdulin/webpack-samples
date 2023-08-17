const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		proxy: {
			'/proxy': {
				target: 'https://jsonplaceholder.typicode.com/',
				pathRewrite: { '/proxy': '' },
				secure: false,
				changeOrigin: true,
			},
		},
		host: '0.0.0.0',
		port: 3000,
		hot: true,
	},
	optimization: {
		runtimeChunk: 'single',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
	],
};
