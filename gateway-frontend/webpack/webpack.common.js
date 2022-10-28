const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const environment = require('./environment');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    //-----------------------//
    //   ENTRY AND OUTPUT   //
    //---------------------//
    context: __dirname,
    entry: '../src/app/index.tsx',
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: 'bundle.js',
    },
    //---------------------//
    //   GENERAL CONFIG   //
    //-------------------//
    stats: 'errors-only',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    //--------------//
    //   MODULES   //
    //------------//
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: () => [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ],
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
        ],
    },
    //--------------//
    //   PLUGINS   //
    //------------//
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', './src/index.html'),
            filename: 'index.html',
            chunksSortMode: 'auto',
            inject: 'body',
            base: '/',
        }),
        new ESLintPlugin({
            baseConfig: {
                parserOptions: {
                    project: ['../tsconfig.json'],
                },
            },
        }),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(environment.VERSION)
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: '../src/content/', to: 'content/' },
                { from: '../src/favicon.ico', to: 'favicon.ico' },
                { from: '../src/robots.txt', to: 'robots.txt' },
            ],
        }),
    ],
}