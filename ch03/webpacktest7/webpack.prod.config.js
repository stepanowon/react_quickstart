var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = { 
    entry: __dirname + '/src/main.js', 
    output: { 
        path: __dirname + '/public', 
        filename: '[name]-[hash].js' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        { loader: "css-loader", options : { modules:true } },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: (loader) => [
                                    require('autoprefixer')(),
                                    require('precss')()
                                ]
                            }
                        }
                    ]
                })
            }            
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : '직원 정보 조회', 
            template : __dirname + '/assets/index.html', 
            filename : 'index.html'      
       }),
       new UglifyJsPlugin(),
       new ExtractTextPlugin("[name]-[hash].css")
    ]
 };
 