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
            }
        ]
    }
 };
 