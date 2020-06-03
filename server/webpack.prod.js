const path = require('path');
const nodeExternals = require('webpack-node-externals');
module.exports = {
  entry: './server/index.tsx',
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  mode: "production",
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: [nodeExternals()],
  node: {
    __dirname: false,
    __filename: false
  }
};