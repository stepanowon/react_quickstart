var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = { 
    devtool : 'source-map',
    entry: __dirname + '/src/main.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    },
    devServer : {
        contentBase : './public',
        inline:true, 
        historyApiFallback :true,
        port : 7777
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
                use: [
                   { loader: "style-loader" },
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
             }             
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : '직원 정보 조회', 
            template : __dirname + '/assets/index.html', 
            filename : 'index.html'      
        })
    ]
 };
 