import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [ react() ],
  base: 'https://development-one1.github.io/hexjia/',
  optimizeDeps: {
    include: [ '@fontawesome/fontawesome-svg-core' ]
  }
})
