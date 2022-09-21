const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 'primary-color': '#007ac3',// 全局主色
        }
      }
    }
  },
  devServer: {
    proxy: {
      '/v1': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        pathRewrite: {
          '^/v1': ''
        }
      }
    }
  }
})
