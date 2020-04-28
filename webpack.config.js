const webpack = require('webpack');
const path = require('path');
require('dotenv').config();

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    mode: 'development',
    entry: ['babel-polyfill', './src/index.js'],
    output: {
      path: path.join(__dirname, 'public'),
      // filename: 'dist/bundle.js',
      filename: 'dist/[name].bundle.js',
      chunkFilename: 'dist/[name].bundle.js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },

        {
          test: /\.s?css$/,
          use: [
            'style-loader'
            ,
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                modules: {
                  mode: 'global',
                  localIdentName: '[local]_[hash:base64]',
                },
              },
            },
            'sass-loader',
          ],
        },
        // {
        //   test: /\.s?css$/,
        //   use: ['style-loader', 'css-loader', 'sass-loader']
        // },
        {
          test: /\.(ttf|eot|woff|woff2|svg)$/,
          use: ['file-loader?name=/dist/assets/fonts/[name].[ext]'],
          exclude: path.resolve(__dirname, './src/assets/images')
        },
        {
          test: /\.(jpe?g|png|gif|svg)$/i,
          use: ['file-loader?name=/dist/assets/images/[name].[ext]'],
          /* Exclude fonts while working with images, e.g. .svg can be both image or font. */
          exclude: path.resolve(__dirname, './src/assets/fonts')
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      port: 7090,
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/',
      compress: true,
      open: true,
      writeToDisk: true
    },
    plugins: [
      new webpack.DefinePlugin({
        API_ENDPOINT: JSON.stringify(process.env.API_ENDPOINT),
        ASSET_ENDPOINT: JSON.stringify(process.env.ASSET_ENDPOINT),
      })
    ]
  };
};