
module.exports = {
    devtool:'eval-source-map',
    entry: [
      './src/index.js'
    ],
    module: {
        rules: [
            {
              test:/\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
            },

            {
                test: /\.html/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'file-loader',
                    options: { name: '[name].[ext]' },
                  }]
              }
          ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: './dist'
    }
  };