import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
      static: path.resolve(__dirname, './static'),
      components: path.resolve(__dirname, './src/components'),
      pages: path.resolve(__dirname, './src/pages'),
    },
  },
  plugins: [react()],
});
