import nodeExternals from 'webpack-node-externals';

export default {
	mode: 'production',
	entry: './server.js',
	externals: [nodeExternals({ importType: 'module' })],
	externalsPresets: { node: true },
	experiments: {
		outputModule: true,
	},
	output: {
		filename: 'main.js',
		clean: true,
	},
};
