import { c as create_ssr_component } from "../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{background-color:#222831;background-size:cover;height:100vh;width:100vw}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage = "About" } = $$props;
  console.log(process.env.NODE_ENV);
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$result.css.add(css);
  return `

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
