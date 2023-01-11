// import adapter from '@sveltejs/adapter-auto';
// import { vitePreprocess } from '@sveltejs/kit/vite';
// import switchCase from 'svelte-switch-case';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
// 	// for more information about preprocessors
// 	preprocess: [vitePreprocess(), switchCase()],

// 	kit: {
// 		adapter: adapter()
// 	}
// };

// export default config;

import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter({
      pages: 'build', // path to public directory
      assets: 'build', // path to public directory
      fallback: null,
    }),
  },
};

export default config;
