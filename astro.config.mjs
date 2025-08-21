// @ts-check
import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'auto',
    assets: 'astro',
  },

  compressHTML: true,

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          pure_funcs: ['console.log', 'console.warn'],
          passes: 2,
          unsafe_arrows: true,
          unsafe_methods: true,
          unsafe_proto: true,
          unsafe_regexp: true,
          unsafe_undefined: true,
        },
        mangle: {
          properties: {
            regex: /^_/,
          },
        },
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            if (id.includes('node_modules')) {
              return 'vendor'
            }
            if (id.includes('astro-icon')) {
              return 'icons'
            }
          },
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash].[ext]',
        },
      },
    },
  },

  integrations: [
    icon({
      include: {
        // Only include the icons we actually use
        'check-circle': ['src/icons/check-circle.svg'],
        'clipboard-check': ['src/icons/clipboard-check.svg'],
        'clipboard-list': ['src/icons/clipboard-list.svg'],
        github: ['src/icons/github.svg'],
        info: ['src/icons/info.svg'],
        'shield-check': ['src/icons/shield-check.svg'],
        sparkles: ['src/icons/sparkles.svg'],
        wand: ['src/icons/wand.svg'],
      },
      iconDir: 'src/icons',
    }),
  ],

  // Prefetch configuration for better performance
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
})
