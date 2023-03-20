const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk-[id].js'
  },
  resolve: {
    extensions: ['.tsx', '.js']
  },
  optimization: {},
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),

    new CopyWebpackPlugin({
      patterns: [{ from: './src/assets/favicon.ico', to: 'favicon.ico' }]
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compiler: 'ttypescript',
              transpileOnly: true,
              compilerOptions: {
                target: 'es2019',
                jsx: 'react-jsxdev'
              }
            }
          }
        ]
      },
      {
        test: /\.css$/,
        compiler: /worker-loader/,
        use: 'null-loader'
      },
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        compiler: { not: /worker-loader/ },
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.module\.css$/,
        compiler: { not: /worker-loader/ },
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: {
                localIdentName: '[name]__[local]__[hash:hex:4]'
              }
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|ico|svg|cur|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: 'files/[name][ext]'
        }
      },
      {
        test: /\.(js|css)$/,
        enforce: 'pre',
        use: ['source-map-loader']
      }
    ]
  },
  watchOptions: {
    ignored: ['node_modules', 'dist']
  }
};
