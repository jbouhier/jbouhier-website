// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // For GitHub Pages
  base: process.env.GITHUB_PAGES === 'true' 
    ? `/${process.env.GITHUB_REPOSITORY?.split('/')[1] || ''}`
    : '/',
  site: 'https://jbouhier.com',
  integrations: [
    tailwind(), 
    sitemap(), 
    react()
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    css: {
      devSourcemap: true,
    },
  },
});