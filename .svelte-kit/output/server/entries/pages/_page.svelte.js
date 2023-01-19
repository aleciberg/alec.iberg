import { c as create_ssr_component, f as add_attribute, b as escape, d as null_to_empty } from "../../chunks/index.js";
import { b as base } from "../../chunks/shared.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".target.svelte-mnbl14{color:#6f1d1b;font-weight:bold}.outdoors.svelte-mnbl14{color:#57753f;font-weight:bold}.about-me-container.svelte-mnbl14{width:90%;margin-top:10px;font-size:20px;overflow:scroll;text-align:center}.image.svelte-mnbl14{height:200px;width:200px;border-radius:100px}.image-container.svelte-mnbl14{text-align:center;margin-bottom:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"about-me-container svelte-mnbl14"}"><div class="${"image-container svelte-mnbl14"}"><img class="${"image svelte-mnbl14"}"${add_attribute("src", `${base}/images/alec.png`, 0)} alt="${"Alec"}"></div>
  <h1 class="${"outdoors svelte-mnbl14"}">About Me</h1>
  <div>Hello, I am <span class="${escape(null_to_empty("outdoors"), true) + " svelte-mnbl14"}">Alec Iberg</span> and I am a Full Stack
    Developer.
    <br>
    <br>
    I currently work at Array, as a Full Stack Developer, building FinTech tools.
    I currently work with${escape(" ")}
    <span class="${"target svelte-mnbl14"}">JavaScript, TypeScript, Svelte, NodeJS, and GoLang${escape(" ")}</span>
    and very much enjoy this stack. I always find great satisfaction in seeing my
    work produce
    <span class="${"target svelte-mnbl14"}">meaningful </span>
    and
    <span class="${"target svelte-mnbl14"}">measurable</span> results and I love being able to
    provide value to the FinTech space and improve access to credit for
    <span class="${"target svelte-mnbl14"}">everyone.</span>${escape(" ")}</div>
  <br>
  <div>As for my personal life, I really enjoy the${escape(" ")}
    <span class="${"outdoors svelte-mnbl14"}">outdoors</span>- you can usually find me camping,
    hiking, or backpacking on a weekend. I am fortunate enough to
    <span class="${"target svelte-mnbl14"}">live in Southern California</span> and be surrounded
    by some of our nation&#39;s best National Parks.${escape(" ")}
    <span class="${escape(null_to_empty("outdoors"), true) + " svelte-mnbl14"}">Joshua Tree</span> is probably my favorite.
    Additionally, I am a huge College Football fan (GO BUCKS!), a big hockey
    fan, and I very much enjoy spending time with my dog,
    <span class="${escape(null_to_empty("outdoors"), true) + " svelte-mnbl14"}">Juniper.</span> She is a 2 year old Border Collie with
    unlimited energy.
  </div>
</div>`;
});
export {
  Page as default
};
