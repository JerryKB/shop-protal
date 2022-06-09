let proxyObj = {}

proxyObj['/shop'] = {
    ws: false,
    target: 'http://localhost:8888',
    changeOrigin: true,
    pathRewrite: {
        '^/shop': ''
    }
}
module.exports = {
    lintOnSave:false,
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: proxyObj
    }
}
