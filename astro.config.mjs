// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/portfolio/detail': '/portofolio/redesain-website-bisnis-edukasi',
    '/portofolio/detail': '/portofolio/redesain-website-bisnis-edukasi'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
