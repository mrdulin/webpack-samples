const glob = require('glob');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const ignoreAssets = glob.globSync('src/*.{png,jpg,gif}', { absolute: true });
const ignoreModules = ignoreAssets.reduce((acc, cur) => {
	acc[cur] = false;
	return acc;
}, {});
console.log('ignoreModules: ', ignoreModules);

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		clean: true,
		publicPath: '',
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		],
	},
	resolve: {
		alias: {
			...ignoreModules,
		},
	},
	plugins: [
		new BundleAnalyzerPlugin({
			analyzerMode: 'json',
		}),
	],
};
