const { mergeWithCustomize } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

// В dev используем style-loader — стили внедряются через JS, не нужен отдельный index.css
module.exports = mergeWithCustomize({
  customizeArray: (a, b, key) => (key === 'module.rules' ? b : undefined)
})(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dev_build'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.(sa|sc)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['postcss-preset-env']]
              }
            }
          }
        ]
      },
      { test: /\.html$/i, loader: 'html-loader' },
      { resourceQuery: /raw/, type: 'asset/source' },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: 'asset/resource',
        generator: { filename: 'images/[hash][ext][query]' }
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        loader: 'file-loader',
        options: { name: 'fonts/[name].[ext]' }
      }
    ]
  }
})
