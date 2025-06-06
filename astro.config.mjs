import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// Get environment in a Deno-compatible way
const isProduction = import.meta.env.PROD

// https://astro.build/config
export default defineConfig({
  // For GitHub Pages deployment
  site: 'https://jbouhier.github.io',
  base: isProduction ? '/jbouhier.github.io' : '/',

  integrations: [
    tailwind({
      applyBaseStyles: true,
      configFile: './tailwind.config.mjs',
    }),
    mdx(),
    sitemap({
      // Generate sitemap with the correct base URL
      customPages: ['https://jbouhier.github.io'],
    }),
    icon({
      include: {
        'fa6-brands': ['x-twitter', 'bluesky', 'youtube', 'linkedin-in', 'github'],
      },
    }),
  ],

  // Image optimization with Sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // Development server options
  server: {
    host: true,
    port: 4321,
  },

  // Build optimizations
  vite: {
    resolve: {
      alias: {
        '@': new URL('src/', import.meta.url).pathname,
      },
    },
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
  },

  // Enable static site generation
  output: 'static',
})
