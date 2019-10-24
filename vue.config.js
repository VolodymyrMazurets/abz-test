const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new ImageminPlugin({
        test: /\.(jpe?g|png|gif|svg)$/i,
        pngquant: {
          quality: '95-100'
        },
        jpegtran: {
          quality: '95-100'
        },
      })
    ]
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/core/*.scss'),
      ],
    },
  },
};
