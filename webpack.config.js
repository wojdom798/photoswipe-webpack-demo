var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader", 
          "sass-loader"   
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader', 
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|ttf|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          "file-loader" 
        ]
      }
    ]
  }
}