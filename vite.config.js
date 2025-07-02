import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),],
   server: {
    host: '0.0.0.0',
    allowedHosts: ['notre-retro-lace-opposed.trycloudflare.com'] // <-- add this line
  }
})
