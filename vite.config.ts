import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    proxy: {
    },
  },
  plugins: [react(),
  VitePWA({
    registerType: 'autoUpdate',
    strategies: 'injectManifest',
    srcDir: 'src',
    filename: 'sw.ts',
    includeAssets: [
      'icons/icon-192x192.png',
      'icons/icon-512x512.png',
    ],
    manifest: {
      name: 'Portfolio', 
      short_name: 'Portfolio', 
      description: 'Portfolio.', 
      theme_color: '#121212', 
      background_color: '#121212', 
      lang: 'ko', 
      display: 'standalone', 
      orientation: 'portrait', 
      start_url: '/', 
      icons: [
        {
          src: 'icons/icon-192x192.png', 
          sizes: '192x192', 
          type: 'image/png',
          purpose: 'any',
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ],
    },
  })
  ],
})