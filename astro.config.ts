import { defineConfig } from 'astro/config'

import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import sectionizePlugin from 'remark-sectionize'
import codeHeadersPlugin from './src/plugins/codeHeadersPlugin'
import readingTimePlugin from './src/plugins/readingTimePlugin'
import config from './src/theme.config'

import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  site: config.site,
  integrations: [mdx(), sitemap()],

  markdown: {
    shikiConfig: {
      themes: config.shikiThemes,
      wrap: true,
      transformers: [codeHeadersPlugin]
    },
    remarkPlugins: [readingTimePlugin, sectionizePlugin]
  },

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ['@resvg/resvg-js', 'fs', 'path', 'child_process']
    }
  },

  adapter: cloudflare()
})
