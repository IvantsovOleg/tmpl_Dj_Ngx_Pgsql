const path = require("path");
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = ({ mode } = { mode: "production" }) => {
    const env = dotenv.config().parsed;
    console.log(env);
    console.log(`mode is: ${mode}`);

    return {
        mode,
        entry: "./src/index.js",
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "public"),
            filename: "bundled.js"
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    loader: 'css-loader'
                },
                {
                    test: /\.(jpe?g|png|svg|gif)$/,
                    exclude: /node_modules/,
                    use: ["url-loader", "file-loader"]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader : 'babel-loader'
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new CleanWebpackPlugin,
            new CopyWebpackPlugin({
                patterns: [
                  { from: path.resolve(__dirname, 'src', 'css'), to: path.resolve(__dirname, 'public', 'css') },
                  { from: path.resolve(__dirname, 'src', 'images'), to: path.resolve(__dirname, 'public', 'images') }
                ]
      })
        ]
    }
};