const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: true,
    port: 8081
  },
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output manager',
      template: './src/index.html'
    })
  ],
  optimization: {
    usedExports: true
  },
  module: {
    rules: [
      { 
        test: /\.ts[x]?$/, 
        loader: "awesome-typescript-loader" 
      },
      { 
        enforce: "pre", 
        test: /\.ts[x]$/, 
        loader: "source-map-loader" 
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json", ".png"],
  },
}