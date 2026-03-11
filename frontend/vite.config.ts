import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
      '/cdn': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  // SPA fallback: serve index.html for all non-asset routes (e.g. /product/5)
  appType: 'spa',
});
