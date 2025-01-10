import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.REACT_APP_GRAPHQL_URI': JSON.stringify(
      process.env.REACT_APP_GRAPHQL_URI
    ),
    'process.env.REACT_APP_SPRING_BOOT_API_URL': JSON.stringify(
      process.env.REACT_APP_SPRING_BOOT_API_URL
    ),
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
