var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
    devtool : 'source-map',
    mode : 'development',
    entry: { 
        main: __dirname + '/src/main.js' 
    }, 
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
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                exclude : /\.module\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader" }
                ]
            },
            {
                test: /\.module\.css$/,
                use: [
                  { loader: "style-loader" },
                  { loader: "css-loader", options : { modules: true } }
                ]
            }         
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            title : '직원 정보 조회', 
            template : __dirname + '/assets/index.html', 
            filename : 'index.html'
       }),    
    ], 
    devServer : {
        contentBase : './public',
        inline:true, 
        historyApiFallback :true,
        port : 7777
    }
 };
 