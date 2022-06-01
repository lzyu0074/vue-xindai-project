const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://1.116.64.64:5004/',  // 开发
        changeOrigin: true,
      },
    },
  }

})
