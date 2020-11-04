module.exports = {
  chainWebpack: (config) => {
    config.devServer.proxy({
      '/api': {
        target: 'http://47.110.74.37:7001/',
      },
    });
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        additionalData: `@import "~@/assets/styles/variables.scss";`,
      },
    },
  },
};
