const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        // these are processed in reverse order
        // styleLoader(cssLoader(sassLoader('source')))
        use: [{
          // outputs css into a <style> tag
          loader: 'style-loader'
        }, {
          // parses css into javascript and resolves dependencies
          loader: 'css-loader'
        }, {
          // transforms sass into css
          loader: 'sass-loader'
        }]
      },
    ]
  }
})