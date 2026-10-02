import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://yiannisberdousis.github.io',
  base: '/psifiakes-diadromes/',
  integrations: [mdx()],
  output: 'static'
});
