const path = require('path');

module.exports = {
	// mode: 'development',
  mode: 'production',
	entry: {
		main: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		clean: true,
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
};
