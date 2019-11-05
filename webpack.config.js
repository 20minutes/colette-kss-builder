const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const config = {
  context: path.resolve(__dirname, './src'),
  mode: 'production',
  // mode: 'development',
  entry: {
    kss: './js/kss.js',
    'kss-item': './js/kss-item.js',
  },
  output: {
    path: path.join(__dirname, './kss-assets'),
    filename: '[name].bundle.js',
    publicPath: './kss-assets/',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
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
      {
        test: /\.styl$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            },
          },
          'postcss-loader',
          {
            loader: 'stylus-loader',
            options: {
              paths: [
                'node_modules',
              ],
              'include css': true,
              'resolve url': true,
              stylus: {
                preferPathResolver: 'webpack',
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].min.css',
    }),
  ],
}

module.exports = config
