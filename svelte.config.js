import adapter from '@sveltejs/adapter-static'; // or adapter-node, adapter-auto, etc.

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            // options for your chosen adapter
            fallback: 'app.html'
        })
    }
};

export default config;