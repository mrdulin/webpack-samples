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
		proxy: {
			'/proxy': {
				// target: 'https://jsonplaceholder.typicode.com/',
        target: 'http://localhost:4000',
				pathRewrite: { '/proxy': '' },
				secure: false,
				changeOrigin: true,
				logLevel: 'debug',
			},
		},
    // headers: {
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    //   "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    // },
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
