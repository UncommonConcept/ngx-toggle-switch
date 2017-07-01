const path = require('path');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        main: './src/example/main',
        vendor: './src/example/vendor',
        polyfills: './src/example/polyfills'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(path.join(__dirname, './src/example/dist')),
        filename: 'bundle.js',
        publicPath: '/angular2-ui-switch/example/dist/'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                exclude: /\.d\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            compress: {
                warnings: false
            },
            comments: false
        }),
        new CommonsChunkPlugin({
            names: ['vendor', 'polyfills'],
            filename: '[name].js'
        })
    ]
};