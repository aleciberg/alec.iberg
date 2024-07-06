import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { T as Typewriter } from "../../../chunks/Typewriter.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".written-line.svelte-5i1y3k{color:#57753f;padding:20px}.link.svelte-5i1y3k{color:#6f1d1b}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div>${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "cascade", interval: 100 }, {}, {
    default: () => {
      return `<h2 class="${"written-line svelte-5i1y3k"}">Check out my <a class="${"link svelte-5i1y3k"}" href="${"https://github.com/aleciberg"}" target="${"_blank"}">GitHub</a></h2>
		<h2 class="${"written-line svelte-5i1y3k"}">Check out my <a class="${"link svelte-5i1y3k"}" href="${"https://linkedin.com/in/aleciberg"}" target="${"_blank"}">LinkedIn</a></h2>
		<h2 class="${"written-line svelte-5i1y3k"}">Email Me <a class="${"link svelte-5i1y3k"}" href="${"mailto: ibergalec@icloud.com"}" target="${"_blank"}">Here</a></h2>`;
    }
  })}
</div>`;
});
export {
  Page as default
};
