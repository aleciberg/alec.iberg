import{S,i as I,s as x,k as u,l as _,m as p,h as m,p as o,L as k,b as d,I as D,n as f,f as g,d as C,t as h,J as E,x as G,a as J,y as R,c as V,z as j,A as q,g as L}from"../../../chunks/index-d2f047b0.js";import{c as $}from"../../../chunks/shared-5d0213f0.js";function w(c){let s,a,n,t;return{c(){s=u("div"),a=u("img"),this.h()},l(i){s=_(i,"DIV",{class:!0});var e=p(s);a=_(e,"IMG",{alt:!0,class:!0,src:!0}),e.forEach(m),this.h()},h(){o(a,"alt",n=c[0].name),o(a,"class","image svelte-b9rkr3"),k(a.src,t=`${$}${c[0].image}`)||o(a,"src",t),o(s,"class","skill-container svelte-b9rkr3")},m(i,e){d(i,s,e),D(s,a)},p(i,[e]){e&1&&n!==(n=i[0].name)&&o(a,"alt",n),e&1&&!k(a.src,t=`${$}${i[0].image}`)&&o(a,"src",t)},i:f,o:f,d(i){i&&m(s)}}}function z(c,s,a){let{skill:n}=s;return c.$$set=t=>{"skill"in t&&a(0,n=t.skill)},[n]}class A extends S{constructor(s){super(),I(this,s,z,w,x,{skill:0})}}function y(c,s,a){const n=c.slice();return n[1]=s[a],n}function b(c){let s,a,n,t;return a=new A({props:{skill:c[1]}}),{c(){s=u("div"),G(a.$$.fragment),n=J(),this.h()},l(i){s=_(i,"DIV",{class:!0});var e=p(s);R(a.$$.fragment,e),n=V(e),e.forEach(m),this.h()},h(){o(s,"class","skill svelte-oy57os")},m(i,e){d(i,s,e),j(a,s,null),D(s,n),t=!0},p:f,i(i){t||(g(a.$$.fragment,i),t=!0)},o(i){h(a.$$.fragment,i),t=!1},d(i){i&&m(s),q(a)}}}function B(c){let s,a,n=c[0],t=[];for(let e=0;e<n.length;e+=1)t[e]=b(y(c,n,e));const i=e=>h(t[e],1,1,()=>{t[e]=null});return{c(){s=u("div");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(e){s=_(e,"DIV",{class:!0});var r=p(s);for(let l=0;l<t.length;l+=1)t[l].l(r);r.forEach(m),this.h()},h(){o(s,"class","skills-container svelte-oy57os")},m(e,r){d(e,s,r);for(let l=0;l<t.length;l+=1)t[l].m(s,null);a=!0},p(e,[r]){if(r&1){n=e[0];let l;for(l=0;l<n.length;l+=1){const v=y(e,n,l);t[l]?(t[l].p(v,r),g(t[l],1)):(t[l]=b(v),t[l].c(),g(t[l],1),t[l].m(s,null))}for(L(),l=n.length;l<t.length;l+=1)i(l);C()}},i(e){if(!a){for(let r=0;r<n.length;r+=1)g(t[r]);a=!0}},o(e){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)h(t[r]);a=!1},d(e){e&&m(s),E(t,e)}}}function M(c){return[[{name:"TypeScript",image:"/images/typescript.png"},{name:"React",image:"/images/react.png"},{name:"Svelte",image:"/images/svelte.png"},{name:"JavaScript",image:"/images/js.png"},{name:"Redux",image:"/images/Redux.png"},{name:"Git",image:"/images/gitbash.png"},{name:"CI/CD",image:"/images/gitlab-ci.png"},{name:"Jest",image:"/images/jest.png"},{name:"GoLang",image:"/images/golang.png"},{name:"Node",image:"/images/node.png"}]]}class T extends S{constructor(s){super(),I(this,s,M,B,x,{})}}export{T as default};
