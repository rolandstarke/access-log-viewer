const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "docs"),
  publicPath: './',
  transpileDependencies: [
    'vuetify'
  ],
  productionSourceMap: false,
}
