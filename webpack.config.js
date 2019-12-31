const path = require( 'path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 5000
    },
    module: {
        rules: [{
            test: /\.(scss)$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
                { loader: 'sass-loader' }
            ]
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: __dirname + '/src/index.html'
        })
    ]
}