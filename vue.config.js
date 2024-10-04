module.exports = {
  publicPath: "./",
  chainWebpack: (config) => {
    config.optimization.merge({
      splitChunks: {
        chunks: "all",
        minSize: 20000, // 20kb 允许新拆出 chunk 的最小体积，也是异步 chunk 公共模块的强制拆分体积
        maxAsyncRequests: 6, // 每个异步加载模块最多能被拆分的数量，同一 domain 最大 6 个
        maxInitialRequests: 6, // 每个入口和它的同步依赖最多能被拆分的数量，同一 domain 最大 6 个
        enforceSizeThreshold: 50000, // 强制执行拆分的体积阈值并忽略其他限制
        cacheGroups: {
          // 对 node_modules 中的每个依赖单独打包
          defaultVendors: false, // 禁用默认 vendors 规则
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // 使用模块名称进行拆分，比如: node_modules_lodash_chunk.js
              const packageName = module.context.match(
                /[\\/]node_modules[\\/](.*?)([\\/]|$)/
              )[1];
              return `npm.${packageName.replace("@", "")}`;
            },
            chunks: "all",
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      },
    });
  },
};
