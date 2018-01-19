const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.pug$/,
            use: ['html-loader', 'pug-html-loader']
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            hash: true,
            template: './src/index.pug'
        })
        // new ExtractTextPlugin({
        //     filename: './dir/index.html',
        //     disabled: false,
        //     allChunks: true
        // })
    ]
};