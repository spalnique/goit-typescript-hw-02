import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { sourcemap: true },
  resolve: {
    alias: {
      components: '/src/components',
      api: '/src/unsplash-api',
      hooks: '/src/hooks',
      types: '/src/@types',
    },
  },
});
