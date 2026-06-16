const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dev_build')
    },
    hot: true,
    port: 8080,
    open: '/pages/home/'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev_build'),
    clean: true
  }
})
