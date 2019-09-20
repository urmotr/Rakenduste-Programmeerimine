const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    /*contentBase: path.join(__dirname, 'dist'),
    compress: true,*/
    port: 3000,
    open: 'chrome'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        }
      }
    ]
  },
  plugins: [
      new CopyPlugin([
        { from: 'public' },
      ]),
	new CleanWebpackPlugin(
	{dry: true,}
	),
    ],
};
