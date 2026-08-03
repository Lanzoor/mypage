import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import type { Config } from '@sveltejs/kit';

const config: Config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter(),
    },
};

export default config;
