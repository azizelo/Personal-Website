import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://azizelo.github.io/Personal-Website',
  base: '/Personal-Website/',
  integrations: [tailwind()],
  output: 'static',
});
