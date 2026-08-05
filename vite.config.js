import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Innowise-int/',
  server: {
    proxy: {
      '/api': {
        target: 'https://openlibrary.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});