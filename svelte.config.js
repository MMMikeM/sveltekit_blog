import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'

import { mdsvex } from 'mdsvex'
import remarkUnwrapImages from 'remark-unwrap-images'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
  extensions: ['.md'],
  layout: {
    _: './src/mdsvex.svelte'
  },
  remarkPlugins: [remarkUnwrapImages],
  rehypePlugins: [rehypeSlug]
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
    inlineStyleThreshold: 102400,
    alias: {
      $blog: 'blog',
      $components: 'src/components'
    }
  }
}

export default config
