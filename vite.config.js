import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.PNG'], // Include PNG files as assets
  define: {
    global: 'window', // Define global as window for browser compatibility
  },
  server: {
    open: true, // Automatically open browser on server start
  },
})
