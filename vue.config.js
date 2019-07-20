module.exports = {
  devServer: {
    proxy: {
      '/api': {
        // 要跨域的域名
        target: 'https://c.y.qq.com/',
        // 是否跨域
        changeOrigin: true,
        ws: true,
        // 路径重写 以/api开头的都匹配
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}