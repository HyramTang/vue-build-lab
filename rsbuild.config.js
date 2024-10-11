import { defineConfig } from "@rsbuild/core";
import { pluginVue2 } from "@rsbuild/plugin-vue2";

export default defineConfig({
  html: {
    template: "./public/index.html",
  },
  plugins: [pluginVue2()],
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
