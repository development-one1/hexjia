import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  base: '/hexjia/',

  build: {
    sourcemap: false,   // ❌ evita ver código original
    minify: 'esbuild',   // 🔥 hace el JS más difícil de leer
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: true,
    }
  },

  optimizeDeps: {
    include: ['@fontawesome/fontawesome-svg-core']
  }
})