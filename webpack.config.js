const path = require("path");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
const { ProvidePlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "app.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es6",
          jsxFactory: "h"
        },
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "esbuild-loader",
            options: {
              loader: "css",
              minify: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new ProvidePlugin({
      "h": ["preact", "h"]
    })
  ],
  devtool: false,
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin()
    ]
  },
  resolve: {
    alias: {
      "@": path.join(__dirname, "/src")
    },
    extensions: [
      ".js",
      ".jsx"
    ]
  }
};
