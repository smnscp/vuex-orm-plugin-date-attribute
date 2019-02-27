const path = require('path');

module.exports = {
  entry: './src/index.ts',
  target: 'node',
  output: {
    library: 'vuex-orm-plugin-date-attribute',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      { test: /\.[tj]s$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ]
  }
};
