const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		// alias: {
		// 	'scope:a$': path.resolve(__dirname, '@scope/package/a'),
		// 	'scope:b$': path.resolve(__dirname, '@scope/package/b'),
		// 	'scope:c$': path.resolve(__dirname, '@scope/package/c'),
		// },

		alias: {
			scope: path.resolve(__dirname, 'node_modules/@scope/package'),
		},
	},
	plugins: [new MiniCssExtractPlugin()],
};
