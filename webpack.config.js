/**
 * Created by liulj on 2017/1/8.
 */
var webpack = require("webpack");
var path = require("path");

var SRC_DIR = path.resolve(__dirname, "src");//源码文件
var DIST_DIR = path.resolve(__dirname, "app");//编译后的文件

module.exports = {
    devtool: 'cheap-module-eval-source-map',//错误快速定位到源码
    // entry: SRC_DIR + "/containers/index.js",//入口文件
    entry: {
        "bundle": SRC_DIR + "/containers/index.js",
    },//入口文件
    output: {//输出打包文件路径和名称
        path: DIST_DIR,//本地文件输出的路径,默认和当前文件同级(不设置会在当前目录输出)
        filename: "[name].js",//内存或者本地打包文件的名称
        publicPath: "/app"//1.开发环境指的的内存中的打包文件
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {//指定符合正则的文件需要使用loaders编译
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                include: SRC_DIR,
                loaders: "babel-loader",
                query: {
                    presets: ["es2015", "react", "stage-0"]
                }
            },
            {
                test: /\.sass$/,
                loaders: ['style', 'css', 'sass'],
                include: SRC_DIR,
            },
            {
                test: /\.css$/,
                loaders: 'style-loader!css-loader',
                include: SRC_DIR,
            },
        ]

    }
}