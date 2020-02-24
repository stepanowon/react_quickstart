module.exports = { 
    mode : 'production',
    entry: __dirname + '/src/main.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
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
            }
        ]
    }
};
 