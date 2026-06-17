// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import pagefind from 'astro-pagefind';
import { remarkTextDiagram } from './src/plugins/remark-text-diagram.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://haoping-xiao.github.io',
  integrations: [mdx(), pagefind()],
  markdown: {
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'],
    },
    remarkPlugins: [remarkTextDiagram],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
