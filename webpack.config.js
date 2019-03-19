const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: path.join(__dirname, 'src/js/app/index.js'),
    output: {
        path: path.join(__dirname, 'public/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080,
        open: true
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }]
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, "js/lib/jquery-3.2.1.min.js")
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
        }),
    ]
}