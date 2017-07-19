module.exports = {
  entry: './src/index.js',
  resolve: {
    alias: {},
    extensions: ["", ".js", ".jsx", ".es6", ".css"],
    modules: [".", "./node_modules"]
  },
  printer: {
    tabWidth: 4,
    useTabs: false,
    reuseWhitespace: true,
    lineTerminator: "\n",
    wrapColumn: 80,
    quote: "single",
    trailingComma: false,
    arrayBracketSpacing: false,
    objectCurlySpacing: true,
    arrowParensAlways: false,
    flowObjectCommas: true
  }
};
