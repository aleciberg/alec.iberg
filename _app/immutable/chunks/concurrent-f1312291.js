import{w as c}from"./writeEffect-4af28ea2.js";import{a as u}from"./animationSetup-9a354b2f.js";const a=(e,s)=>s.text.length-e.text.length,l=e=>e.sort(a)[0].currentNode,d=(e,s)=>{new MutationObserver(r=>{r.forEach(o=>{const n=o.type==="attributes",i=o.target.classList.contains("finished-typing");n&&i&&s()})}).observe(e,{attributes:!0,childList:!0,subtree:!0})},h=(e,s)=>{const{options:t,elements:r}=u(e,s),o=l(r);d(o,()=>t.dispatch("done"));for(const n of r)c(n,t).then(()=>{t.keepCursorOnFinish?n.currentNode!==o&&n.currentNode.classList.replace("typing","finished-typing"):n.currentNode.classList.replace("typing","finished-typing"),typeof t.keepCursorOnFinish=="number"&&setTimeout(()=>{n.currentNode.classList.replace("typing","finished-typing")},t.keepCursorOnFinish)})};export{h as default};
