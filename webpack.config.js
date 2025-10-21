const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { name } = require("./package.json");

module.exports = {
  entry: "./src/index.js",
  output: {
    library: name,
    libraryTarget: 'umd',
    chunkLoadingGlobal: `webpackJsonp_${name}`,
    publicPath: `/${name}/`,
  },
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    port:8008,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  externals: {
    react: "React",
    antd: "antd",
    "react-dom": "ReactDOM",
    'dayjs': "dayjs",
    "styled-components": "styled",
    "@music163/tango-boot": "TangoBoot",
    "@mijastudio/antd": "MijaStudioAntd",
    "@mijastudio/pro-components": "MijaStudioPro",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tango App",
      template: "index.html",
      inject: "body",
    }),
  ],
};
