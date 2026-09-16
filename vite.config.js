import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({

  plugins: [react()],

  base: '/hexjia/',

  build: {

    sourcemap: false,

    minify: 'esbuild',

    terserOptions: {

      compress: {
        drop_console: true,
        drop_debugger: true,
      },

      mangle: true,

    },

    rollupOptions: {

      input: {

        main: resolve(__dirname, 'index.html'),

        escala: resolve(__dirname, 'escala/index.html'),

      },

    },

  },

  optimizeDeps: {

    include: ['@fontawesome/fontawesome-svg-core']

  }

})