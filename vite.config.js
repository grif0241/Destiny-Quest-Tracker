import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import icons from './icons.json';
// console.log(icons.icons);

// https://vitejs.dev/config/
export default defineConfig({
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
      scope: '/', // Ensure the scope is set to root as well
      start_url: '/', // Add this line
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
              maxEntries: 30, // Adjust based on your needs
              maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
            },
          },
        },
        // Other caching rules can be added here
      ],
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})