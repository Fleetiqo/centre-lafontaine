import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/centre-lafontaine/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})
