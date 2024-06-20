const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EsbuildPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'production',

	entry: './src/index.tsx',

	output: {
		path: path.resolve(__dirname, `./dist/`),
		clean: true,
	},

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							esModule: true,
							modules: {
								namedExport: false,
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.[tj]sx?$/,
				loader: 'esbuild-loader',
				options: {
					target: 'es2015',
					// This will make esbuild automatically generate import statements,
					// making the ProviderPlugin unnecesary if used only for "react".
					// Note that this option makes sense only when used in conjuction
					// with React >16.40.0 || >17
					// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
					jsx: 'automatic',
				},
				include: [path.resolve(__dirname, './src')],
			},
		],
	},
	optimization: {
		minimize: false,
		minimizer: [
			// Use esbuild to minify
			new EsbuildPlugin({
				target: 'es2015',
				css: true,
			}),
		],
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		new MiniCssExtractPlugin(),
	],
};
