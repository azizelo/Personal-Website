import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/Personal-Website/',
  integrations: [tailwind()],
  // Optional: if you're not using SSR
  output: 'static',
});
