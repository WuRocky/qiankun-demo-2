import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import qiankun from 'vite-plugin-qiankun'
import path from 'path'

export default defineConfig({
  // base: '/',
  base: '/sub-app-vue3/',
  plugins: [
    vue(),
    qiankun('sub-app-vue3', {
      useDevMode: false, 
      // useDevMode: true, 
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
        format: 'umd', 
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
