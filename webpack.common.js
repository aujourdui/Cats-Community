const path = require("path");

module.exports = {
  entry: "./src/app.tsx",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, "./ts.config.json"),
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", "jsx", "json"],
  },
  target: ["web", "es5"],
};
