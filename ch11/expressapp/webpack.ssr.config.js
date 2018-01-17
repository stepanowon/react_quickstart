module.exports = { 
    entry : {
        server : __dirname + '/src/server.js',
    },
    externals: ['express'],
    output: { 
        path: __dirname + '/build', 
        filename: '[name].js',
        libraryTarget: "commonjs2"
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
    },
    "target": "node"
 };
 