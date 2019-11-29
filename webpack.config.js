const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  //mode: "none",
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/bundle.js'
  },
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: 'firefox',
    proxy: {
      "/api": "http://localhost:3000"
    }
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          failOnError: true,
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {

        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.(woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options:{
              outputPath: "static/fonts"
            }
          },
        ],
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(
        {dry: true,}
    ),
      new CopyPlugin([
        { from: 'public/index.html' },
        { from: 'public/style', to: 'static/style'},
        { from: 'public/images', to: 'static/images'},
      ]),
    ],
};
