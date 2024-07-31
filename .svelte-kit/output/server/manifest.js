export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/Redux.png","images/alec.png","images/clicrypto.gif","images/crwnclothing.png","images/docker.png","images/forest.svg","images/gcp.png","images/gitbash.png","images/gitlab-ci.png","images/golang.png","images/jest.png","images/js.png","images/moviefight.png","images/node.png","images/noncompete.png","images/postgres.png","images/react.png","images/svelte.png","images/typescript.png","images/weatherApp.gif"]),
	mimeTypes: {".png":"image/png",".gif":"image/gif",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-94fcfcd6.js","imports":["_app/immutable/start-94fcfcd6.js","_app/immutable/chunks/index-5e34f11b.js","_app/immutable/chunks/shared-5d0213f0.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
