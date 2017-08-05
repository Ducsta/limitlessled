module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' }
        ]
    },
    externals: {
        "jquery": "jQuery"
    }
}