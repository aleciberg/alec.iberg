import{s as c,r as t,b as y}from"./animationSetup-9a354b2f.js";const e=async n=>c(Array.isArray(n)?n[t(0,n.length)]:n),f=async({currentNode:n,text:a},r)=>{y(n,r.parentElement,s=>{const i=n===s?"typing":"finished-typing";s.classList.add(i)});for(let s=0;s<=a.length;s++)a[s]==="<"&&(s=a.indexOf(">",s)),n.innerHTML=a.slice(0,s),await e(r.interval)};export{e as t,f as w};
