const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const os = require('os');

const threadPoolOptions = {
	workers: os.cpus().length - 1,
};
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'thread-loader',
						options: threadPoolOptions,
					},
					isProd ? MiniCssExtractPlugin.loader : 'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: { localIdentName: '[path][local]' },
						},
					},
				],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin()],
};
