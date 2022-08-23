const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'development:',
  entry:['./src/ui/index.tsx','./src/ui/main.css'],
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'public/js'),
    clean:true
  },
  
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { 
            loader: ['ts-loader'], 
            options: { onlyCompileBundledFiles: true } 
          }
        ],
        exclude: [/node_modules/],
        
      },
      {
        test: /\.css$/,
        exclude:[/node_modules/],
        loader: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
      })
        // use: [ 'style-loader', 'css-loader' ]
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  watch: true,
  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts', 'css','less'],
  },
  
};
