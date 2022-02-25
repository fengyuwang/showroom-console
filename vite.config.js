import { defineConfig } from 'vite'
// import Vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import uni from '@dcloudio/vite-plugin-uni'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Vue(),
    WindiCSS(),
    uni.default()
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
