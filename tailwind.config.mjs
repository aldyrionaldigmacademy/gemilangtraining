/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        tc: {
          bg: '#0B0F17',        // Background Hitam Solid
          card: '#111827',      // Card Surface Solid
          border: '#1F2937',    // Border Netral
          text: '#FFFFFF',      // Teks Utama Putih
          muted: '#9CA3AF',     // Teks Sekunder Abu-abu
          accent: '#10B981',    // Aksen Emerald Solid
          accentHover: '#059669'// Aksen Hover
        }
      }
    },
  },
  plugins: [],
}