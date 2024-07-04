const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin({
	outputFormat: 'humanVerbose',
});

module.exports = smp.wrap({
	// mode: 'development',
	mode: 'production',
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
        // npm link的package路径是D:\workspace\mrdulin\dm-utils，因此需要/dm-utils/而不是/@d-matrix[\\/]utils/
				exclude: [/node_modules/, /dm-utils/],
				use: {
					loader: 'babel-loader',
					options: {
            // 由于上面exclude掉了dm-utils，因此babel不会对其转译，所以dm-utils/dist/support.js中的箭头函数不会被转译
						presets: [['@babel/preset-env', { targets: { chrome: 43 } }]],
					},
				},
			},
		],
	},
	optimization: {
		// usedExports: true,
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all',
				},
			},
		},
	},
});
