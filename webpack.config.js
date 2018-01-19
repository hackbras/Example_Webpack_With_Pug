const path = require('path');
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
            template: './src/index.pug',
            minify: {
                collapseWhitespace: false,
                sortAttributes: true,
                sortClassName: true,
                html5: true
            }
        })
    ]
};