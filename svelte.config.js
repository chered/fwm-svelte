import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
        // Add the adapter configuration here:
        adapter: adapter({
            pages: 'build',      // Output directory for static files
            assets: 'build',     // Output directory for assets
            fallback: 'index.html',      // For Hostinger, null is often fine for static sites
            precompress: false,
            strict: true
        }),
        paths: {
            base: '', // IMPORTANT: Empty string for root domain on Hostinger Shared Hosting
        },
        prerender: {
            // Pre-render all discoverable routes. Adjust if you have dynamic routes.
            entries: ['/']
        }
    }
};

export default config;
