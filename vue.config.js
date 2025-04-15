const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "~@/assets/css/variables.scss" as *;
        `
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
  }
})
