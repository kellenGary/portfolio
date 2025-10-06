

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/secret/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.CUHM8ugN.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/69_IOA4Y.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/AgLraLLN.js","_app/immutable/chunks/Bgmj8Orc.js"];
export const stylesheets = [];
export const fonts = [];
