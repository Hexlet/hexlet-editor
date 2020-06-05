const path = require('path');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isProd = env === 'production';

module.exports = {
  mode: env,
  entry: [
    './app/assets/stylesheets/application.scss',
    './app/javascript/application.js',
  ],
  output: {
    publicPath: '/assets/',
    path: path.resolve(__dirname, 'public/assets'),
  },
  devtool: isProd ? false : 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    gon: 'gon',
    net: 'net',
    fs: 'fs',
    tls: 'tls',
    child_process: 'child_process',
    'node-pty': 'node-pty',
    express: 'express',
    'express-ws': 'express-ws',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.ttf$/,
        use: ['file-loader'],
      },
      {
        test: /\.js\.map$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    // new CleanWebpackPlugin(),
    // new HtmlWebPackPlugin({
    //   template: './public/index.html',
    //   filename: './index.html',
    // }),
    new MiniCssExtractPlugin({
      // filename: '[name].[contenthash].css',
    }),
    // new CopyPlugin([
    //   { from: './public/favicon.ico', to: './favicon.ico' },
    //   { from: './public/manifest.json', to: './manifest.json' },
    //   { from: './public/logo192.png', to: './logo192.png' },
    // ]),
    new MonacoWebpackPlugin({
      languages: ['javascript', 'php', 'python', 'typescript'],
    }),
  ],
  optimization: {
    minimizer: [
      new TerserPlugin(),
      new OptimizeCSSAssetsPlugin({}),
    ],
    // Automatically split vendor and commons
    // https://twitter.com/wSokra/status/969633336732905474
    // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    // splitChunks: {
    //   chunks: 'all',
    //   name: false,
    // },
    // Keep the runtime chunk separated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    // https://github.com/facebook/create-react-app/issues/5358
    // runtimeChunk: {
    //   name: (entrypoint) => `runtime-${entrypoint.name}`,
    // },
  },
};
