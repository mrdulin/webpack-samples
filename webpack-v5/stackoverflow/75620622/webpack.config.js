module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		clean: true,
	},
	module: {
		rules: [
			{
				resourceQuery: /raw/,
				type: 'asset/source',
			},
		],
	},
};
