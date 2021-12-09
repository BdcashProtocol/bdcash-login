var path = require('path');
const webpack = require('webpack')

module.exports = {
  externals: ['fs'],
  output: {
    filename: 'bdcash.login.min.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  ],
  resolve: {
    fallback: { 
      "crypto": require.resolve("crypto-browserify"),
      "constants": require.resolve("constants-browserify"),
      "stream": require.resolve("stream-browserify")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      },
      {
        test:  /\.png$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'imgs/'
            }
          }
        ]
      },
      {
        test:  /\.jpg$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'imgs/'
            }
          }
        ]
      }
    ],
  },
};