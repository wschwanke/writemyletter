// For instructions about this file refer to
// webpack and webpack-hot-middleware documentation
const webpack = require('webpack');
const { join, resolve } = require('path');
const merge = require('webpack-merge');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const config = require('./config');


let webpackConfig = {
  context: config.paths.root,

  devtool: (config.enabled.sourceMaps ? 'cheap-module-source-map' : undefined),

  entry: {
    bundle: [
      join(config.paths.root, 'app/index.jsx'),
      join(config.paths.root, 'app/assets/styles/main.scss'),
    ],
  },

  stats: 'verbose',

  mode: config.env.production ? 'production' : 'development',

  performance: {
    hints: false,
  },

  output: {
    path: config.paths.dist,
    publicPath: config.paths.public,
    filename: !config.env.production ? 'scripts/[name].js' : 'scripts/[name].[hash].js',
    chunkFilename: !config.env.production ? 'scripts/[name].js' : 'scripts/[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/bower_components/, /node_modules/],
        loader: ['babel-loader'],
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        use: [
          config.enabled.watcher ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: config.enabled.sourceMaps } },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: join(config.paths.root, '/webpack'), ctx: config },
              sourceMap: config.enabled.sourceMaps,
            },
          },
        ],
      },
      {
        test: /\.scss?$/,
        exclude: /node_modules/,
        use: [
          config.enabled.watcher ? 'style-loader' : MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: config.enabled.sourceMaps } },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: join(config.paths.root, '/webpack'), ctx: config },
              sourceMap: config.enabled.sourceMaps,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                join(config.paths.root, '/node_modules'),
              ],
              sourceMap: config.enabled.sourceMaps,
            },
          },
        ],
      },
    ],
  },

  resolve: {
    alias: {
      blocks: join(config.paths.root, 'app/blocks'),
      components: join(config.paths.root, 'app/components'),
      services: join(config.paths.root, 'app/services'),
      scenes: join(config.paths.root, 'app/scenes'),
      router: join(config.paths.root, 'app/router'),
      state: join(config.paths.root, 'app/state'),
    },
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          reuseExistingChunk: true,
        },
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          enforce: true,
        },
      },
    },
  },

  target: 'web',

  plugins: [
    new HardSourceWebpackPlugin(),
    new CleanWebpackPlugin([config.paths.public], {
      root: config.paths.root,
      verbose: false,
    }),
    new CopyWebpackPlugin(
      [
        {
          context: join(config.paths.assets, 'images'),
          from: '**/*',
          to: join(config.paths.root, 'public/dist/images'),
          flatten: true,
        },
      ],
      {
        copyUnmodified: true,
      },
    ),
    new MiniCssExtractPlugin({
      filename: !config.env.production ? 'styles/[name].css' : 'styles/[name].[hash].css',
      chunkFilename: !config.env.production ? 'styles/[name].css' : 'styles/[name].[hash].css',
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],

  cache: false,
};

if (config.env.production) {
  webpackConfig.plugins.push(new webpack.NoEmitOnErrorsPlugin());
}

if (config.enabled.watcher) {
  webpackConfig = merge(webpackConfig, require('./webpack.watcher.config.js'));
}

module.exports = webpackConfig;
