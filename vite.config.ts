import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import checker from "vite-plugin-checker"

export default defineConfig({
  //项目根目录
  root: process.cwd(),
  //项目启动的context-path
  base: '/mine-frontend',
  //静态资源文件夹public
  publicDir: fileURLToPath(new URL('./public', import.meta.url)),
  //静态资源文件夹assets
  assetsInclude: fileURLToPath(new URL('./src/assets', import.meta.url)),
  
  //项目构建过程
  build: {
    outDir: 'dist',
    minify: true,
    sourcemap: true
  },

  //全局变量
  define: {
    // SYSTEM_NAME: 'mine-frontend'
  },

  //插件
  plugins: [
    vue(),
    checker({
			typescript: true
		}),
    eslintPlugin()
  ],

  //CSS配置
  css: {
    modules: {
      localsConvention: 'camelCase',
      scopeBehaviour: 'local',
      generateScopedName: '[name]_[local]_[hash:5]',
      globalModulePaths: ["./src/global.module.css"],
    }
  },

  //模块解析规则
  resolve: {
    alias: {
      '@src': fileURLToPath(new URL('./src', import.meta.url)),
      '@public': fileURLToPath(new URL('./public', import.meta.url)),
      '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
    }
  },

  //开发服务器
  server: {
    //端口号
    port: 8070,
    //启动时自动在浏览器打开
    open: true,
    //是否开启https
    https: false,
    //监听所有地址
    host: true,
    //为开发服务器配置CORS
    cors: false,
    //若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: true,
    //配置自定义代理规则
    proxy: {
      //后端接口代理转发
      '^/api': {
        target: "http://localhost:8090",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/mine-backend/api'),
      },
    }
  }
})
