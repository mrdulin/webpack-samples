const path = require('path');
const { EsbuildPlugin } = require('esbuild-loader');

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
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
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
			new EsbuildPlugin({
				target: 'es2015',
				css: true,
			}),
		],
	},
};
