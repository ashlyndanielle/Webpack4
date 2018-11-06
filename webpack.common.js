const path = require('path');

module.exports = {
  entry: './src/index.js',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: 'bundle.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    // loaders let you run preprocessors on files as they're imported
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}