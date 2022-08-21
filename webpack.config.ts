const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/ui/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public/js'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader', options: { onlyCompileBundledFiles: true } },
        ],
        exclude: [/node_modules/],
      },
    ],
  },
  watch: true,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
