import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

export default defineConfig({
  html: {
    title:'vue3-upgrade',
    template: "./index.html",
  },
  plugins: [pluginVue()],
  source: {
    // 指定入口文件
    entry: {
      index: "./src/main.js",
    },
    alias: {
      "@": "./src",
    },
  },
});
