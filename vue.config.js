const path = require('path');
const ImageminPlugin = require('imagemin-webpack-plugin').default
const ImageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPngquant = require('imagemin-pngquant')

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    plugins: [
      new ImageminPlugin({
        plugins: [
          ImageminMozjpeg({
            quality: 70
          }),
          ImageminPngquant({
            quality: '80-90'
          })
        ]
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
