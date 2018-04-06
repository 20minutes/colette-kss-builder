const path = require('path')

const config = {
  context: path.resolve(__dirname, './src'),
  entry: {
    kss: './js/kss.js',
  },
  output: {
    path: path.join(__dirname, './kss-assets'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    libraryTarget: 'umd',
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
          options: {
            babelrc: false,
            presets: [
              ['env', {
                useBuiltIns: true,
              }],
            ],
            plugins: [
              ['transform-strict-mode', {
                strict: true,
              }],
            ],
          },
        },
      },
    ],
  },
}

module.exports = config
