import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    // GitHub Pages serves 404.html for unknown paths, which boots the app and renders +error.svelte
    adapter: adapter({ fallback: '404.html' }),
  },
};

export default config;
