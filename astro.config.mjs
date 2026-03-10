import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

export default defineConfig({
  output: 'static',
  site: 'https://jbouhier.com',
  integrations: [
    sitemap(), 
    react()
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
    css: {
      devSourcemap: true,
    },
  },
});
