// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://abhishekjani.dev',

  // Hidden so the local preview matches what ships. Flip to true to get the
  // component inspector and the accessibility auditor back.
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    mdx(),
    // Case study pages are unlisted: nothing on the site links to them, so
    // indexing them would put pages in search results with no route back into
    // the site. They stay live for direct links.
    sitemap({ filter: (page) => !page.includes('/projects/') }),
    icon({ iconDir: 'src/icons' }),
  ]
});