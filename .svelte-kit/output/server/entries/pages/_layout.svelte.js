import { c as create_ssr_component, e as each, b as escape, d as null_to_empty, f as add_attribute } from "../../chunks/index.js";
import { b as base } from "../../chunks/shared.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-image:url(/images/forest.svg);background-size:cover;height:100vh;width:100vw;overflow:hidden}.main-container.svelte-1no5y3v{border-radius:50px 50px 0 0;border:3px solid #6f1d1b;border-bottom:0px;height:80vh;width:60vw;position:fixed;left:50%;bottom:0%;transform:translate(-50%);background-color:lightgrey;display:flex;justify-content:center;opacity:85%}.main-container-small.svelte-1no5y3v{border-radius:50px 50px 0 0;border:3px solid #6f1d1b;border-bottom:0px;height:70vh;width:95vw;position:fixed;left:50%;bottom:0%;transform:translate(-50%);background-color:lightgrey;display:flex;justify-content:center;opacity:85%}.sidebar-container.svelte-1no5y3v{text-align:center;margin:auto;padding-top:50px;color:red;height:10vh;width:100vw;overflow:scroll}.link.svelte-1no5y3v{font-size:30px;color:white;padding:55px;margin:5px}.selected.svelte-1no5y3v{font-size:30px;color:#6f1d1b;padding:55px;margin:5px}.dropdown-container.svelte-1no5y3v{display:flex;flex-direction:column;height:auto;width:200px;position:fixed;z-index:2;border:1px solid black;border-radius:10px}.dropdown.svelte-1no5y3v{font-size:20px;background-color:darkgrey;padding:5px;text-decoration:none;color:#6f1d1b}.button.svelte-1no5y3v{height:50px;width:50px;border-radius:10px;padding:2px}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let links = ["About", "Skills", "Projects", "Resume", "Links"];
  let { currentPage = "About" } = $$props;
  console.log(process.env.NODE_ENV);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$result.css.add(css);
  return `

${`<div class="${"sidebar-container svelte-1no5y3v"}">${each(links, (link) => {
    return `<a class="${escape(null_to_empty(link === currentPage ? "selected" : "link"), true) + " svelte-1no5y3v"}"${add_attribute("href", link === "About" ? `${base}/` : `${base}/${link}`, 0)}>${escape(link)}</a>`;
  })}</div>`}

<div class="${escape(
    null_to_empty("main-container"),
    true
  ) + " svelte-1no5y3v"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export {
  Layout as default
};
