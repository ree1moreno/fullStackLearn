// const path = require("path");

// module.exports = {
//   entry: {
//     main: "./src/index.js",
//     hello: "./src/hello.js",
//   },
//   // mode: "development",
//   mode: "production",
//   output: {
//     path: path.resolve(__dirname, "public"),
//     filename: "[name].bundle.min.js",
//   },
// };

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
