const path = require("path");
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
        use: "babel-loader?cacheDirectory",
        exclude: [
          /node_modules/
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
  resolve: {
    extensions: [
      ".js",
      ".jsx"
    ]
  }
};
