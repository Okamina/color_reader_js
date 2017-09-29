var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + '/dist',
        filename: "app.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }]
    },
    plugins: [
    new OpenBrowserPlugin({
        url: 'http://localhost:8080'
    })
    ]
};