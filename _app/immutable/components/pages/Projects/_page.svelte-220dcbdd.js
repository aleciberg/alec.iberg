import{S as E,i as W,s as F,C as L,k as u,l as f,m as d,h as _,p as m,E as k,b as A,G as $,n as v,K as G,r as M,a as w,u as O,c as y,L as V,F as p}from"../../../chunks/index-233c6165.js";function C(l,e,s){const n=l.slice();return n[3]=e[s][0],n[4]=e[s][1],n}function I(l){let e,s,n=l[3]+"",o,r,a,t,c,i;return{c(){e=u("div"),s=u("p"),o=M(n),r=w(),a=u("a"),t=u("img"),i=w(),this.h()},l(h){e=f(h,"DIV",{class:!0});var g=d(e);s=f(g,"P",{});var b=d(s);o=O(b,n),b.forEach(_),r=y(g),a=f(g,"A",{target:!0,href:!0});var j=d(a);t=f(j,"IMG",{class:!0,src:!0}),j.forEach(_),i=y(g),g.forEach(_),this.h()},h(){m(t,"class","image svelte-1jxinm1"),V(t.src,c=l[4].image)||m(t,"src",c),m(a,"target","_blank"),m(a,"href",l[4].link),m(e,"class","project")},m(h,g){A(h,e,g),p(e,s),p(s,o),p(e,r),p(e,a),p(a,t),p(e,i)},p:v,d(h){h&&_(e)}}}function q(l){let e,s,n,o;L(l[2]);let r=Object.entries(l[1]),a=[];for(let t=0;t<r.length;t+=1)a[t]=I(C(l,r,t));return{c(){e=u("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=f(t,"DIV",{class:!0});var c=d(e);for(let i=0;i<a.length;i+=1)a[i].l(c);c.forEach(_),this.h()},h(){m(e,"class",s=k(l[0]>1100?"projects-container":"projects-container-small")+" svelte-1jxinm1")},m(t,c){A(t,e,c);for(let i=0;i<a.length;i+=1)a[i].m(e,null);n||(o=$(window,"resize",l[2]),n=!0)},p(t,[c]){if(c&2){r=Object.entries(t[1]);let i;for(i=0;i<r.length;i+=1){const h=C(t,r,i);a[i]?a[i].p(h,c):(a[i]=I(h),a[i].c(),a[i].m(e,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=r.length}c&1&&s!==(s=k(t[0]>1100?"projects-container":"projects-container-small")+" svelte-1jxinm1")&&m(e,"class",s)},i:v,o:v,d(t){t&&_(e),G(a,t),n=!1,o()}}}function x(l,e,s){let n;const o={"CLI Crypto":{name:"clicrypto",link:"https://github.com/aleciberg/CLI_crypto",image:"/images/clicrypto.gif"},"CRWN CLOTHING":{name:"Crwn Clothing",link:"https://github.com/aleciberg",image:"/images/crwnclothing.png"},"Movie Fight":{name:"Movie Fight",link:"https://github.com/aleciberg/movieFight",image:"/images/moviefight.png"},"Weather App":{name:"Weather App",link:"https://github.com/aleciberg/AirQualityViewer",image:"/images/weatherApp.gif"}};function r(){s(0,n=window.innerWidth)}return[n,o,r]}class D extends E{constructor(e){super(),W(this,e,x,q,F,{})}}export{D as default};
