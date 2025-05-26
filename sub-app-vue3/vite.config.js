import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'

export default defineConfig({
  base: '/', // 🚀 若部署到 CDN 路徑，可改成 '/sub-app-vue3/' 之類
  plugins: [
    vue(),
    qiankun('sub-app-vue3', {
      // useDevMode: false, // 🛠️ 生產模式部署時關閉 dev mode
      useDevMode: true, // 🛠️ 生產模式部署時關閉 dev mode
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'static',
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'umd', // 🔧 讓主應用能正確識別
        name: 'subAppVue3',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  server: {
    port: 5174,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
