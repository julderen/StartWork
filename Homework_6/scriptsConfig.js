var path = require("path");
var webpack = require("webpack");

module.exports = {
    context: __dirname,
    entry: {
        index: path.join(__dirname, "project", "index.js")
    },
    output: {
        path: path.join(__dirname, "build"),
        publicPath: "/build/",
        filename: "[name].js"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.PrefetchPlugin("react"),
        new webpack.PrefetchPlugin("react/lib/ReactComponentBrowserEnvironment")
    ],
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ["es2015", "react"]
                }
            }
        ]
    }
};
