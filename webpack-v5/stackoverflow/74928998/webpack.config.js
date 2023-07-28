const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'js/bundle.[contenthash].js',
		path: path.resolve(__dirname, './dist'),
		clean: true,
		publicPath: './',
	},
	mode: 'production',
	plugins: [
		new CopyWebpackPlugin({
			patterns: [{ from: './assets/img', to: './assets/img/[name].[contenthash][ext]' }],
			options: {
				concurrency: 100,
			},
		}),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			templateParameters: (compilation, assets, assetTags, options) => {
				console.log('compilation.assets: ', compilation.assets);
				return {
					compilation,
					webpackConfig: compilation.options,
					htmlWebpackPlugin: {
						tags: assetTags,
						files: assets,
						options,
					},
					loadAsset: (filename) => {
						const parsedFilepath = path.parse(filename);
						const assetNames = Object.keys(compilation.assets)
							.filter((k) => k)
							.map((k) => compilation.options.output.publicPath + k);
						for (let i = 0; i < assetNames.length; i++) {
							const assetName = assetNames[i];
							const parsedAssetPath = path.parse(assetName);
							const parsedAssetNameWithoutContentHash = parsedAssetPath.name.split('.')[0];
							if (
								parsedAssetNameWithoutContentHash === parsedFilepath.name &&
								parsedAssetPath.ext === parsedFilepath.ext
							) {
								return assetName;
							}
						}
					},
				};
			},
		}),
	],
};
