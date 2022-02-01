const path = require("path");
const assetsPath = function (_path) {
    const assetsSubDirectory = 'static';
  
    return path.posix.join(assetsSubDirectory, _path)
}
module.exports = {
    outputDir: "docs",
    publicPath: "/nibl-resume/"
}
