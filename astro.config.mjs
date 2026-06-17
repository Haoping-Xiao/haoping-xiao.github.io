// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  site: 'https://haoping-xiao.github.io',
  integrations: [mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
  },
});
