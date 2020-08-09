/**
 * webpack config
 * @author: Arie M. Prasetyo (2020)
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 
const port = 3000;
const host = 'localhost';
 
module.exports = {
    bail: true,
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://' + host + ':' + port,
        'webpack/hot/only-dev-server',
        __dirname + '/src/index.js',
    ],
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                // Transform JS files from ES2015/JSX to ES5.
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                // CSS imports
                test: /\.css$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            },
                            url: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: loader => [
                                require('autoprefixer')()
                            ]
                        }
                    }
                ],
            },
            {
                // load image files
                test: /\.(png|jpg|svg)$/,
                use: ['url-loader']
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/static/index.html',
            filename: './index.html'
        }),
        new CopyWebpackPlugin([
            __dirname + '/static/index.css'
        ], {})
    ],
    devServer: {
        host,
        port,
        progress: true,
        colors: true,
        contentBase: __dirname + '/src',
        historyApiFallback: true
    }
};