module.exports = { 
    devtool : 'source-map',
    entry: __dirname + '/src/app.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    },
    devServer : {
        contentBase : './public',
        inline:true, 
        historyApiFallback :true,
        port : 7777
    }
 };
 