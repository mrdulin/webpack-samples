import path from 'path';
import { fileURLToPath } from 'url';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config: webpack.Configuration = {
	mode: 'production',
	entry: path.resolve(__dirname, './src/server.ts'),
	externalsPresets: { node: true },
	// @ts-ignore
	externals: [nodeExternals({ importType: 'module' })],
	// externals: [
	//   function ({ context, request }: any, callback: any) {
	//     console.log('request: ', request);
	//     if (/^express$/.test(request)) {
	//       return callback(null, 'module ' + request);
	//     }
	//     callback();
	//   },
	// ],
	experiments: {
		outputModule: true,
	},
	module: {
		rules: [
			{
				loader: 'ts-loader',
				options: {
					transpileOnly: true,
				},
				test: /\.ts(x?)$/,
			},
		],
	},
	output: {
		filename: '[name].js',
		clean: true,
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
	},
};

export default config;
