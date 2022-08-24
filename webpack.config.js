const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/ui/index.tsx',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public/resource'),
  },
  plugins: [new MiniCssExtractPlugin()] ,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'ts-loader', options: { onlyCompileBundledFiles: true } },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
   
  },
  watch: true,
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};
