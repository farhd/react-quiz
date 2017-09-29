'use strict';
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	devtool: 'eval-source-map',
	entry: [
		'babel-polyfill',
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server', // do not reload whole page
		'react-hot-loader/patch',
		path.join(__dirname, '../src/index.js')
	],
	output: {
		path: path.join(__dirname, '../dist/'),
		filename: '[name].js',
		publicPath: '/'
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new ExtractTextPlugin('[name]-dev.css'),
		new OpenBrowserPlugin({ url: 'http://localhost:3000' }),
		// new webpack.ProvidePlugin({
		// 	$: 'jquery',
		// 	jQuery: 'jquery',
		// 	'window.jQuery': 'jquery',
		// 	Popper: ['popper.js', 'default'],
		// })
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				enforce: "pre",
				exclude: /node_modules/,
				loader: "eslint-loader",
				options: {
					configFile: '.eslintrc',
					failOnWarning: false,
					failOnError: false
				}
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'es2015', 'stage-2']
				}
			},
			{
        test: /\.css$/,
        include: [/bootstrap/],
				loaders: [
					'style-loader?sourceMap',
					'css-loader?modules=false',
					'postcss-loader'
				],
			},
			{
        test: /\.css$/,
        exclude: [/bootstrap/],
				loaders: [
					'style-loader?sourceMap',
					'css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'postcss-loader'
				],
			},
			{
				test: /\.scss$/,
				loaders: [
					'style-loader',
					'css-loader?modules=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
					'sass-loader?sourceMap',
					'postcss-loader'
				]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
        loader: 'file-loader'
      },
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				loaders: [
					'file-loader', {
						loader: 'image-webpack-loader',
						options: {
							gifsicle: {
								interlaced: false,
							},
							optipng: {
								optimizationLevel: 7,
							},
							pngquant: {
								quality: '65-90',
								speed: 4
							},
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// Specifying webp here will create a WEBP version of your JPG/PNG images
							webp: {
								quality: 75
							}
						}
					}
				]
			}
		]
	}
};
