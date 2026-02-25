import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/500na700/',
  optimizeDeps: {
    include: ['react-imask'],
  },
});
