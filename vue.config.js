const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  publicPath: "./",
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(
        new CompressionWebpackPlugin({
          // filename: "[path][base].gz", // 生成的文件名格式：保持原始路径和文件名，并添加 `.gz` 后缀
          algorithm: "gzip", // 使用 gzip 压缩
          test: /\.(js|css|html|svg)$/, // 匹配需要压缩的文件类型
          threshold: 10240, // 只处理大于 10KB 的文件
          minRatio: 0.8, // 压缩比小于 0.8 的文件才会被处理
          deleteOriginalAssets: false, // 不删除原始文件
        })
      );
    }
  },
  chainWebpack: (config) => {
    config.optimization.merge({
      splitChunks: {
        chunks: "all",
        minSize: 20000, // 20kb 允许新拆出 chunk 的最小体积，也是异步 chunk 公共模块的强制拆分体积
        maxAsyncRequests: 6, // 每个异步加载模块最多能被拆分的数量，同一 domain 最大 6 个
        maxInitialRequests: 6, // 每个入口和它的同步依赖最多能被拆分的数量，同一 domain 最大 6 个
        enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值并忽略其他限制
        cacheGroups: {
          libs: {
            // 第三方库：Vue、VueRouter、Vuex、lodash
            name: "chunk-libs",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial", // 只打包初始时依赖的第三方
          },
          "bootstrap-vue": {
            // bootstrap-vue 单独拆包
            name: "chunk-bootstrap-vue",
            test: /[\\/]node_modules[\\/]bootstrap-vue[\\/]/,
            priority: 20, // 权重要大于 libs
          },
          commons: {
            // 公共模块包
            name: `chunk-commons`,
            minChunks: 2,
            priority: 0,
            reuseExistingChunk: true,
          },
        },
      },
    });
  },
};
