const path                  = require('path');
const prototypesFiles       = path.resolve(__dirname, "src", "prototypes")
const fs                    = require("fs")
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const webpack               = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        prototypes: fs.readdirSync(prototypesFiles).map(file => path.resolve(prototypesFiles, file)),
        app: [path.join(__dirname, 'src', 'index.tsx')],
        vendor: ['react', 'react-dom']
    },
    target: 'web',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    devServer: {
        contentBase: "dist/",
        historyApiFallback: true,
        port: 3000,
        hot: true,
        open: true
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                },
                exclude: '/node_modules/'
            },
            { 
                test: /\.js$/, 
                loader: "source-map-loader",
                enforce: "pre", 
            },
            {
                test: /\.(png|jpe?g|gif)$/i,///\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            title: "App title goes here"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}