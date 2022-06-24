const mix = require('laravel-mix')
const webpack = require('webpack')
const path = require('path')

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: 'vue/dist/vue.esm-bundler.js',
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false,
    }),
  ],
})

mix
  .js('src/main.js', 'dist/js')
  .sass('src/scss/main.scss', 'dist/css')
  .options({
    processCssUrls: false,
  })
  .copyDirectory('src/fonts', 'dist/fonts')
  .copyDirectory('src/ico', 'dist/ico')
  .copyDirectory('src/images', 'dist/images')
