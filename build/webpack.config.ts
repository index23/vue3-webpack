import * as path from 'path';
import * as webpack from 'webpack';

// Webpack Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const config: webpack.Configuration = {
    mode: 'production',
    context: path.resolve(__dirname, '../src'),
    entry: './main.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.vue$/i,
                loader:'vue-loader'
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vue 3 Webpack',
            template: 'index.html'
        }),
        new VueLoaderPlugin()
    ]
};

export default config;
