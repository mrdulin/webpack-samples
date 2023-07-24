module.exports = (env) => {
	console.log(env.imageLoaderDisable, typeof JSON.parse(env.imageLoaderDisable));

	return {
		mode: 'development',
		entry: './src/index.js',
		module: {
			rules: [
				{
					test: /\.(gif|png|jpe?g|svg)$/i,
					use: [
						'file-loader',
						{
							loader: 'image-webpack-loader',
							options: {
								disable: JSON.parse(env.imageLoaderDisable),
							},
						},
					],
				},
			],
		},
	};
};
