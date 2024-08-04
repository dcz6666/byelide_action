/*eslint-env node */
// 引入 ESLint 插件，用于现代化模块解析
// require('@rushstack/eslint-patch/modern-module-resolution')

// 配置 Stylelint 的规则集
module.exports={
    // 继承一系列预定义的配置
    extends: [
        // 标准的 Stylelint 配置
        "stylelint-config-standard",
        // 与 Prettier 配合使用的 Stylelint 配置
        "stylelint-config-prettier",
        // 适用于 Vue 模板的 HTML 校验规则
        "stylelint-config-html/vue"
    ]
}