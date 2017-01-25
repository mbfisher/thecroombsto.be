var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyPlugin = require('copy-webpack-plugin');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
var autoprefixer = require('autoprefixer');

var staticPath = path.join(__dirname, '../static');

module.exports = {
    devtool: 'source-map',
    entry: './src/client.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') },
            { test: /\.woff$/, loader: 'file' },
            { test: /\.png/, loader: 'file' }
        ]
    },
    postcss: [ autoprefixer({ browsers: ['last 2 versions']} ) ],
    plugins: [
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV) }
        }),
        new ExtractTextPlugin('bundle.css'),
        new ModernizrWebpackPlugin({
            'feature-detects': [ 'video/autoplay' ]
        })
    ].concat('production' === process.env.NODE_ENV ? [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ] : [])
};
