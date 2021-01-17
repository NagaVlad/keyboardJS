const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev


// const jsLoaders = () => {
//    const loaders = [
//       // loader: 'babel-loader',
//       // options: babelOptions()
//    ]

//    if (isDev) {
//       loaders.push('eslint-loader')
//    }

//    return loaders
// }

// const optimization = () => {
//    const config = {
//       splitChunks: {
//          chunks: 'all'
//       }
//    }

//    if (isProd) {
//       config.minimizer = [
//          new OptimizeCssAssetWebpackPlugin(),
//          new TerserWebpackPlugin()
//       ]
//    }

//    return config
// }

module.exports = {
   context: path.resolve(__dirname, 'source'),
   mode: 'development',
   entry: {
      main: ['@babel/polyfill', './index.js'],
      // analytics: './analytics.js'
   },
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist')
   },

   resolve: {
      extensions: ['.js', '.json', '.png'],
      alias: {
         //ПОСМОТРЕТЬ с  1:22
      }
   },
   // optimization: optimization(),

   devServer: {
      port: 5500,
      hot: isDev
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: './index.html',
         minify: {
            collapseWhitespace: isProd
         }
      }),
      new CleanWebpackPlugin(),

      new MiniCssExtractPlugin({
         filename: '[name].css',
      })
   ],
   module: {
      rules: [
         {
            test: /\.css$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     publicPath: path.resolve(__dirname, 'dist'),
                     // hmr: isDev,
                     // reloadAll: true
                     //1:49
                  },
               }
               , 'css-loader'
            ]
         },
         {
            test: /\.s[ac]ss$/,
            use: [
               {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                     // hmr: isDev,
                     // reloadAll: true
                  },
               },
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.(ttf|woff|woff2|eot)$/,
            use: ['file-loader']
         },
      ]
   }
}