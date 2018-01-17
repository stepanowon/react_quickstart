const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
	devtool: 'source-map',
	entry: [
		'./src/index.js',
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'static/js/[name].js',
		chunkFilename: 'static/js/[name].chunk.js',
		publicPath: '/',
	},
	module: {
		strictExportPresence: true,
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader',
				options: {
					compact: true,
					cacheDirectory: true,
				}
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract({
					publicPath: path.resolve(__dirname, 'build'),
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 1,
								minimize: true,
								sourceMap: true,
							},
						},
						{
							loader: 'postcss-loader',
							options: {
								ident: 'postcss',
								plugins: () => [
									require('postcss-flexbugs-fixes'),
									autoprefixer({
										browsers: [
											'>1%',
											'last 4 versions',
											'Firefox ESR',
											'not ie < 9', // React doesn't support IE8 anyway
										],
										flexbox: 'no-2009',
									}),
								]
							},
						}
					],
				})
			} // test: /\.css$/
		] // rules
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'static/css/[name].css',
		}),
	],
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
	},
}