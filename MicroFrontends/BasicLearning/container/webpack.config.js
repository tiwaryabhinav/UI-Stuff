const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { mode, plugins } = require("../products/webpack.config");


module.exports = {
    mode: 'development',
    devServer:{
        port: 8080
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name:"main",
            remotes:{
                products: 'products@http://localhost:8081/remoteEntry.js'
            }
        })
    ]
}