const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
      filename: '[name]-[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    entry: [
      './src/app.js'
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel']
        },
        {
  				test: /\.json$/,
  				loader: 'json-loader'
  			},
        {
          test: /\.css$/,
          include: /node_modules/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&sourceMap!postcss-loader')
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&sourceMap!postcss-loader')
        }
      ]
    },
    resolve: {
  		modulesDirectories: [ 'src', 'node_modules' ],
  		extensions: ['', '.json', '.js', '.jsx', '.css']
  	},
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true }),
      new HtmlWebpackPlugin()
    ],
    postcss: [
      require('postcss-clearfix'),
      require('postcss-nested'),
      require('postcss-cssnext')({
         features: {
           rem: { rootValue: 10 }
         }
       })
    ]
};
