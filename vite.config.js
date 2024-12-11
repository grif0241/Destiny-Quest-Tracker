import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import icons from './icons.json';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Destiny-Quest-Tracker/',  // This will prefix all asset paths
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: 'auto',
    strategies: 'generateSW',

    manifest: {
      name: 'Destiny Quest Tracker',
      short_name: 'Destiny Quest Tracker',
      description: 'Destiny Quest Tracker',
      theme_color: '#ffffff',
      icons: icons.icons,
      display: 'standalone',
      scope: '/Destiny-Quest-Tracker/',
      start_url: '/Destiny-Quest-Tracker/',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico,webmanifest}'], // Added webmanifest
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      runtimeCaching: [
        {
          urlPattern: /\.(?:woff2?|ttf|eot)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'fonts-cache',
            expiration: {
              maxEntries: 30,
              maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
            },
          },
        },
      ],
    },

    devOptions: {
      enabled: false,
      navigateFallback: '/Destiny-Quest-Tracker/index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})