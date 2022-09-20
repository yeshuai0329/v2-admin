module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-eq-null': 2, // 禁止对null使用==或!=运算符,
    'arrow-spacing': 2, // 箭头函数中的箭头前后需要留空格
    'comma-dangle': 2, // 在定义对象或数组时，最后一项不能加逗号
    eqeqeq: 2, // 使用=== !== 代替== != .
    'no-constant-condition': 2, // 禁止在条件中使用常量表达式
    'no-var': 0, // 禁用var，用let和const代替
    'no-undef-init': 2, // 变量初始化时不能直接给它赋值为undefined
    'no-undef': 1, // 不能有未定义的变量
    'vue/multi-word-component-names': 0 // 关闭组件命名检测
  }
}
