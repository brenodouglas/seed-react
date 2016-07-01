const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    output: {
      filename: '[name]-[hash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/'
    },
    entry: {
      app: ['webpack-dev-server/client?http://localhost:8080',
          './src/app.js']
    },
    module: {
      preLoaders: [
       {test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/}
      ],
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
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
    eslint: {
      quiet: true
    },
    resolve: {
  		modulesDirectories: [ 'src', 'node_modules' ],
  		extensions: ['', '.json', '.js', '.jsx', '.css']
  	},
    plugins: [
      new CleanWebpackPlugin([path.resolve(__dirname, 'dist')]),
      new HtmlWebpackPlugin({
        template: 'index.ejs'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('[name]-[chunkhash].css', { allChunks: true})
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
