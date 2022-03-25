const path = require("path");

module.exports = {
  entry: {
    warrantycenter: "./scripts/warrantycenter.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    filename: "index.bundle.js",
    path: path.resolve(__dirname, "assets"),
  },
};
