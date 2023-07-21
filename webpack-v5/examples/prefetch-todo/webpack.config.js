const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './index',
	output: {
		clean: true,
	},
	stats: {
		all: false,
		assets: true,
		ids: true,
		entrypoints: true,
		chunkGroupChildren: true,
		chunkRelations: true,
		chunks: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
		}),
	],
};
