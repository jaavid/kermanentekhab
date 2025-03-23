import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  server: {
    proxy: {
      '/images': {  // Adjust this prefix to match your image URLs
        target: 'cdn.isna.ir',  // Replace with your actual image server URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/images/, '')
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'react-microsoft-clarity',
          ],
          app: ['./src/main.tsx', './src/App.tsx', './src/Router.tsx'],
          framework: [
            '@mantine/core',
            '@mantine/hooks',
          ],
        },
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
  base: '/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
