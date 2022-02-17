import { defineConfig } from 'vite'
// import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
// import Pages from 'vite-plugin-pages'
// import Layouts from 'vite-plugin-vue-layouts'
// import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Vue(),
    // Pages(),
    // Layouts(),
    // Components({
    //   dts: 'tmp/components.d.ts'
    // }),
    // AutoImport({
    //   imports: [
    //     'vue',
    //     'vue-router',
    //     'vue-i18n',
    //     '@vueuse/head',
    //     '@vueuse/core'
    //   ],
    //   dts: 'tmp/auto-imports.d.ts'
    // }),
    WindiCSS(),
    uni.default()
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  css: {
    // css预处理
    preprocessorOptions: {
      scss: {
        /*
				引入var.scss全局预定义变量，
				如果引入多个文件，
				可以使用
				'@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
				这种格式
				 */
        additionalData: '@import "@/assets/scss/globalVariable.scss";'
      }
    }
  }
})
