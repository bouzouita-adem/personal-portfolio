import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  },
  // Use relative base path so the build works both at root (username.github.io)
  // and in repo subdirectories (username.github.io/repo-name)
  base: './',
  server: {
    port: 5173,
    open: false,
    host: true,
  },
});

