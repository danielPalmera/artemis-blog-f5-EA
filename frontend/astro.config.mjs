// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielmolina956.42web.io',

  base: '/artemis',

  vite: {
    plugins: [tailwindcss()]
  }
});


