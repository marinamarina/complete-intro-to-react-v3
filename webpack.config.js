const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/app.js',
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  devServer: {
    publicPath: 'bundle'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [
        {
          enforce: 'pre',
          test: /\.jsx?$/,
          loader: 'eslint-loader',
          include: path.join(__dirname, '/js')          
        },
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',          
          include: path.join(__dirname, '/js'),
        }
      ],
  }
}
