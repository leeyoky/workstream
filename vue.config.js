const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,

  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  }
})


// 프록시 설정
const target = 'http://192.168.1.70:8080';

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/login': { 
        target,
        changeOrigin: true,
      }, 
    },
  },

  pluginOptions: {
    vuetify: {}
  }
}
