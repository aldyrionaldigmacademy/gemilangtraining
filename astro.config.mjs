// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://infomagangmalang.web.id',
  integrations: [sitemap()],
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
    '/portfolio/detail': '/portofolio/redesain-website-bisnis-edukasi'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
