const HtmlWebPackPlugin = require("html-webpack-plugin");

const mode = process.env.TYPE_ENV;

const webpack = require("webpack");

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './public/index.html',
  favicon: './public/favicon.ico'
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
              modules : {
                localIdentName: (mode === "production") ? '[hash:base64:4]' : '[name]__[local]__[hash:base64:4]',
              },
            },
          }
        ]
      },
      {
        test: /\.(woff2|svg)$/i,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true,
    port: 3000,
    open: false
 },
  plugins: [
    htmlWebpackPlugin
  ]
};
