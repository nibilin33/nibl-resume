const path = require("path");

module.exports = {
  outputDir: "docs",
  publicPath: "/nibl-resume/",
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.c?js$/,
          use: {
            loader: "babel-loader"
          },
        }
      ],
    },
  },
  chainWebpack: (config) => {
    config.plugin("copy").use(require("copy-webpack-plugin"), [
      {
        patterns: [
          {
            from: path.resolve(__dirname, "./static"),
            to: "static",
          },
        ],
      },
    ]);
  },
};
