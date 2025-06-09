import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [sveltekit(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ["kellengary.com", "app.kellengary.com"]
  },
  build: {
    outDir: 'build',
    emptyOutDir: true
  }
})
