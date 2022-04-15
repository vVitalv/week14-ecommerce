const { resolve } = require('path')
const webpack = require('webpack')
const ESLintPlugin = require('eslint-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()

const version = 'development'
const config = {
  devtool: 'eval-source-map',
  entry: ['./main.js'],
  resolve: {
    alias: {
      d3: 'd3/index.js',
      'react-dom': '@hot-loader/react-dom'
    }
  },
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, 'dist/assets'),
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash].js'
  },
  mode: 'development',
  context: resolve(__dirname, 'client'),
  devServer: {
    hot: true,
    open: true,
    compress: true,
    static: {
      directory: resolve(__dirname, 'dist/assets'),
      watch: true
    },
    host: 'localhost',
    port: 8087,
    historyApiFallback: true,
    client: {
      overlay: {
        warnings: false,
        errors: true
      },
      progress: true
    },
    proxy: [
      {
        context: ['/api', '/auth', '/ws'],
        target: 'http://localhost:8090',
        secure: false,
        changeOrigin: true,
        ws: process.env.ENABLE_SOCKETS || false
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        },
        include: [/client/, /stories/],
        exclude: /node_modules/
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '../'
            }
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      {
        test: /\.(jpg|png|gif|svg|webp)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      },
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: 'asset/resource'
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ESLintPlugin({
      extensions: ['js', 'jsx'],
      exclude: 'node_modules'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css',
      chunkFilename: 'css/[id].css',
      ignoreOrder: false
    }),
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: `${__dirname}/client/assets/images`, to: 'images' },
          { from: `${__dirname}/client/assets/fonts`, to: 'fonts' },

          { from: `${__dirname}/client/assets/sitemap.xml`, to: 'sitemap.xml' },
          { from: `${__dirname}/client/assets/manifest.json`, to: 'manifest.json' },
          { from: `${__dirname}/client/index.html`, to: 'index.html' },

          {
            from: `${__dirname}/client/install-sw.js`,
            to: 'js/install-sw.js',
            transform: (content) => {
              return content.toString().replace(/APP_VERSION/g, version)
            }
          },
          { from: `${__dirname}/client/assets/robots.txt`, to: 'robots.txt' },
          {
            from: `${__dirname}/client/html.js`,
            to: 'html.js',
            transform: (content) => {
              return content.toString().replace(/COMMITHASH/g, version)
            }
          },
          {
            from: `${__dirname}/client/sw.js`,
            to: 'sw.js',
            transform: (content) => {
              return content.toString().replace(/APP_VERSION/g, version)
            }
          }
        ]
      },
      { parallel: 100 }
    ),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin(
      Object.keys(process.env).reduce(
        (res, key) => ({ ...res, [key]: JSON.stringify(process.env[key]) }),
        {
          APP_VERSION: uuidv4().substring(0, 7),
          ENABLE_SOCKETS: JSON.stringify(process.env.ENABLE_SOCKETS || false)
        }
      )
    ),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config
