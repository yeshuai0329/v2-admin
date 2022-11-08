const { defineConfig } = require('@vue/cli-service')
const { generateTheme } = require('antd-theme-generator')
const path = require('path')

const options = {
  antDir: path.join(__dirname, './node_modules/ant-design-vue'), // 对应具体位置
  stylesDir: path.join(__dirname, './src/styles/theme'), // 对应具体位置
  varFile: path.join(__dirname, './src/styles/theme/variables.less'), // 对应具体位置
  mainLessFile: path.join(__dirname, './src/styles/theme/index.less'), // 对应具体位置
  themeVariables: [
    '@primary-color'
    // '@secondary-color',
    // '@text-color',
    // '@text-color-secondary',
    // '@heading-color',
    // '@layout-body-background',
    // '@btn-primary-bg',
    // '@layout-header-background'
  ],
  indexFileName: 'index.html',
  outputFilePath: path.join(__dirname, './public/color.less')
}
generateTheme(options).then(() => {
  console.log('Theme generated successfully')
})
  .catch(error => {
    console.log('Error', error)
  })

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // 'primary-color': '#007ac3' // 全局主色
          // 'primary-color': '#1890ff' // 全局主色
          // 'link-color': '#1890ff', // 链接色
          // 'success-color': '#52c41a', // 成功色
          // 'warning-color': '#faad14', // 警告色
          // 'error-color': '#f5222d', // 错误色
          // 'font-size-base': '14px', // 主字号
          // 'heading-color': 'rgba(0, 0, 0, 0.85)', // 标题色
          // 'text-color': 'rgba(0, 0, 0, 0.65)', // 主文本色
          // 'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // 次文本色
          // 'disabled-color': 'rgba(0, 0, 0, 0.25)', // 失效色
          // 'border-radius-base': '4px', // 组件/浮层圆角
          // 'border-color-base': '#d9d9d9', // 边框色
          // 'box-shadow-base': '0 2px 8px rgba(0, 0, 0, 0.15)' // 浮层阴影
        }
      }
    }
  },
  devServer: {
    // proxy: {
    //   '/v1': {
    //     target: 'http://localhost:8090',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/v1': ''
    //     }
    //   }
    // }
  }
})
