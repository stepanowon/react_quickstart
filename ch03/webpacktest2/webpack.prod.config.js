module.exports = { 
    mode : 'production',
    entry: __dirname + '/src/app.js', 
    output: { 
        path: __dirname + '/public', 
        filename: 'bundle.js' 
    } 
 };
 