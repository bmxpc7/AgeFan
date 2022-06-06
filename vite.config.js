import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  server: {
    proxy: {
      "/api/v1/": {
        target: "https://age-of-empires-2-api.herokuapp.com",
        secure: false,
        logLevel: "debug",
        changeOrigin: true
      }
    }
  }
})
