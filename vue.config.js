// 此文件用来覆盖vue使用的webpack默认配置
const path = require('path');

const baseHost = "http://localhost:4000";
const proxyBaseHost = baseHost;

module.exports = {
  // 是否在保存的时候检查，启动此项，保存的时候项目里面有console会报错
  lintOnSave: false,
  // 开启代理设置
  devServer: {
    proxy: {
      "/localhost:4000/**":{
        target: proxyBaseHost,
      }
    }
  }
}