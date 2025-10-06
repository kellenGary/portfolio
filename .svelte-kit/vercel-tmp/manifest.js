export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Kellen Gary Resume.pdf","_redirects","about/BME.png","about/C 1.png","about/Java 1.png","about/JavaScript 1.png","about/block_o.png","about/m5.png","about/m6.png","about/m7.png","about/next.png","about/python 1.png","about/react.png","about/tailwing.png","about/triangle.png","about/typescript.png","altruist.jpeg","contact/ghub.png","contact/linkedin.png","contact/m10.png","contact/m11.png","contact/m9.png","icon.png","landing/headshot.jpeg","landing/m1.png","landing/m2.png","landing/m3.png","landing/m4.png","photobooth/altruist_1.jpeg","photobooth/altruist_2.jpeg","photobooth/altruist_3.jpeg","photobooth/basement_show_1.jpeg","photobooth/collab_shirts.jpg","photobooth/drawing_1.jpeg","photobooth/drawing_video_1.MOV","photobooth/fan_1.jpeg","photobooth/fan_2.jpeg","photobooth/fan_3.jpeg","photobooth/live_through_you.jpeg","photobooth/poster_1.jpeg","photobooth/poster_2.jpeg","photobooth/random_1.jpeg","photobooth/random_2.jpg","photobooth/random_3.jpg","photobooth/random_4.jpeg","photobooth/random_5.jpeg","photobooth/roxy_1.jpeg","photobooth/roxy_2.jpeg","photobooth/roxy_3.jpeg","photobooth/roxy_4.jpeg","photobooth/roxy_5.jpeg","photobooth/roxy_6.jpeg","photobooth/roxy_7.jpeg","photobooth/roxy_8.jpeg","photobooth/see_you_again.jpeg","photobooth/setlist.jpeg","photobooth/shirt_back.jpeg","photobooth/shirt_front.jpeg","photobooth/show_1.jpeg","photobooth/show_2.jpeg","photobooth/show_3.jpg","photobooth/show_4.jpg","photobooth/show_5.jpg","photobooth/show_video_1.mov","photobooth/show_video_2.mov","photobooth/studio_1.jpeg","photobooth/treat_me.jpeg","photobooth/whatcha_mean.jpeg","photobooth/whatcha_mean_clip.mov","photobooth/whats_real.jpeg","projects/audit.png","projects/databased.png","projects/fruit.png","projects/lockedin.png","projects/m8.png","projects/pledge.png","projects/smarthub/tables.png","projects/smarthub.png","singles.jpeg","svelte.svg","youve_never.jpeg"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png",".jpeg":"image/jpeg",".jpg":"image/jpeg",".MOV":"video/quicktime",".mov":"video/quicktime",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.CCbGgqPA.js",app:"_app/immutable/entry/app.Bm5lIxqe.js",imports:["_app/immutable/entry/start.CCbGgqPA.js","_app/immutable/chunks/IMvMZb3p.js","_app/immutable/chunks/AgLraLLN.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/GVYjXH4H.js","_app/immutable/entry/app.Bm5lIxqe.js","_app/immutable/chunks/AgLraLLN.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/pHAFBO5D.js","_app/immutable/chunks/Bgmj8Orc.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/GVYjXH4H.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/project/databased",
				pattern: /^\/project\/databased\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/project/fruit-ninja",
				pattern: /^\/project\/fruit-ninja\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/project/lockedin",
				pattern: /^\/project\/lockedin\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/project/osu-degree-audit",
				pattern: /^\/project\/osu-degree-audit\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/project/smarthub",
				pattern: /^\/project\/smarthub\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/project/triangle-pledge-hub",
				pattern: /^\/project\/triangle-pledge-hub\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/secret",
				pattern: /^\/secret\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
