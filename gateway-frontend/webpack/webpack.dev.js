const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
        port: 8090,
        historyApiFallback: true,
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
    ],
}