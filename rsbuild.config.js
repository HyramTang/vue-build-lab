import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

export default defineConfig({
  html: {
    template: "./public/index.html",
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
