const path = require("path");

module.exports = {
  mode: process.env === "development" ? "development" : "production",
  entry: {
    "dom-to-react": path.resolve(__dirname, "src/index.jsx"),
    "inject-button": path.resolve(__dirname, "src/injectButton"),
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  devtool:
   
    process.env === "development" ? "eval-cheap-module-source-map" : undefined,
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
