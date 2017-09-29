var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "app");

var config = {
    entry: SRC_DIR + "/js/app.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "app.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015"]
                }
            }
        ]
    }
};

module.exports = config;