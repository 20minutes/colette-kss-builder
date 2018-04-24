const path = require('path')

const config = {
  context: path.resolve(__dirname, './src'),
  mode: 'production',
  entry: {
    polyfill: 'babel-polyfill',
    kss: './js/kss.js',
  },
  output: {
    path: path.join(__dirname, './kss-assets'),
    filename: '[name].bundle.js',
    publicPath: './kss-assets/',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'var',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, // Match both .js and .jsx files
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}

module.exports = config
