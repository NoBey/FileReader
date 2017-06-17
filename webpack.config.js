
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './app/main.js',
  output: {
    path: path.join(__dirname, 'build'),
       filename: 'index.js'
  },
  externals: {
    // 'React': 'react'
  },
  module: {
    rules: [{
          test: /\.js(.*)$/,
          loader: "babel-loader",
          exclude: /node_modules/,
          options: {
            presets: ['latest', 'react']
          }
        }]
  }
}
