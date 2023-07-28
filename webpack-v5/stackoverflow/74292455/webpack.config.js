const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		main: './src/a.js',
		c: {
			import: './src/c.js',
		},

		b: {
			import: './src/b.js',
		},

		a: {
			import: './src/a.js',
			dependOn: ['b', 'c'],
		},
	},
	output: {
		filename: (pathData) => {
			if (pathData.chunk.name === 'main') {
				return '[name].js';
			}
			return 'modules/[name].js';
		},
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	optimization: {
		splitChunks: {
			chunks: (chunk) => chunk.name !== 'main',
			cacheGroups: {
				styles: {
					name: 'styles',
					type: 'css/mini-extract',
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [new MiniCssExtractPlugin({ filename: 'main.css' })],
};
