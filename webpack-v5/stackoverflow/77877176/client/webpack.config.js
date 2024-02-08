const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		hot: true,
		proxy: {
			'/api': {
				target: 'https://localhost:8443',
				secure: false,
				changeOrigin: true,
			},
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/index.html'),
		}),
	],
};
