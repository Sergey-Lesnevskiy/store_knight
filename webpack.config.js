const path = require('path');
const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

const baseConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            { test: /\.ts$/i, use: 'ts-loader' },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                  outputPath:  'images' }
               },
               {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
               {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
              },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
        new EslingPlugin({ extensions: 'ts' }),
    ],
};

module.exports = ({ mode }) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? require('./webpack.prod.config') : require('./webpack.dev.config');

    return merge(baseConfig, envConfig);
};