# Vue 3 升级指南

1. 更新依赖包
```bash
# 生产依赖
# 移除 Vuex
pnpm remove vuex
# 升级 Vue 3 生态
pnpm update -P vue@3 vue-router@4 vant@4
# 添加 pinia
pnpm add -P pinia

# 开发依赖
# 移除不需要的依赖
pnpm remove -D @vue/cli-plugin-router @vue/cli-plugin-vuex babel-eslint     eslint-plugin-prettier less less-loader
# 升级依赖
pnpm update -D @vue/eslint-config-prettier@9 eslint@8 eslint-plugin-vue@9     prettier@3
# 添加依赖
pnpm add -D @rushstack/eslint-patch

# 其它
pnpm add -D @rsbuild/plugin-vue
pnpm remove -D @rsbuild/plugin-vue2
```

2. 调整配置文件
- 删除 .browserslistrc
- 删除 .eslintrc.js 添加 .eslintrc.cjs
- 添加 .prettierrc.json
- 删除 babel.config.js
- 添加 jsconfig.json

3. 迁移 HTML
- HTML 文件迁移至根目录
- HTML 内容调整
- rsbuild.config.js 配置调整

4. 迁移 src/main.js
- 移除 sotre (vuex)
- 引入 pinia
- 调整 Vue 3 注册方式

5. 迁移路由配置 src/router/index.js
- 调整路由注册方式
6. 