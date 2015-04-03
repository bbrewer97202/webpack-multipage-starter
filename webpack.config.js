var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    cache: true,
    entry: {
        home: "./src/entry/home/home.js",
        feature: "./src/entry/feature/feature.js"
    },
    output: {
        path: path.join(__dirname, "dist/"),
        publicPath: "/",
        filename: "js/[name].js"
    },
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            { 
                test: /\.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            { 
                test: /\.scss/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },
            { 
                test: /\.woff/,
                loader: "file-loader?name=fonts/[name].woff" 
            },
            { 
                test: /\.ttf/,
                loader: "file-loader?name=fonts/[name].ttf" 
            },
            { 
                test: /\.eot/, 
                loader: "file-loader?name=fonts/[name].eot" 
            },
            { 
                test: /\.svg/, 
                loader: "file-loader?name=fonts/[name].svg" 
            }           
        ]
    },
    resolve: {
        root: [
            __dirname + "/src/vendor"
        ],
        alias: {
            "bootstrap": "bootstrap/bootstrap.3.3.2.min.js",
            "underscore": "underscore.1.7.0.min.js"
        }
    },  
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("core", "js/core.js", ["home", "feature"]),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.ProvidePlugin({
            jQuery: "jquery",
            $: "jquery"
        })      
    ],
    externals: {
        "$": "jQuery"
    }   
};