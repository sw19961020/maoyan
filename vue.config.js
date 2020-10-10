module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.maoyan.com',
        changeOrigin: true
      },
      '/maoyansh': {
        target: 'https://show.maoyan.com',
        changeOrigin: true,
        headers: {
          host: 'show.maoyan.com',
          referer: 'https://show.maoyan.com/qqw/?fromTag=wxmyshow'
        }
      }
    }
  }
}
