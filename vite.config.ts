import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    tailwindcss(),
    svgr(),
    react(),
    compression({ algorithm: 'brotliCompress' }) // Gzip yoki Brotli siqishni yoqish
  ],
  build: {
    target: 'esnext', // Zamonaviy brauzerlar uchun
    minify: 'esbuild', // Tez va samarali minifikatsiya
    assetsInlineLimit: 4096, // Kichik fayllarni inline qilish
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable', // Keshni sozlash
    }
  }
})
