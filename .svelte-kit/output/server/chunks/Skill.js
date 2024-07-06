import { c as create_ssr_component, e as escape, d as null_to_empty, b as add_attribute } from "./index.js";
import { b as base } from "./shared.js";
const Skill_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skill-container-large.svelte-1azds9j{height:100px;width:100px;display:flex;justify-content:center;border-radius:14px;overflow:hidden}.skill-container-small.svelte-1azds9j{height:125px;width:125px;display:flex;justify-content:center;margin-top:5px;border-radius:14px;overflow:hidden}.image-large.svelte-1azds9j{height:100px;width:100px}.image-small.svelte-1azds9j{height:100px;width:100px}",
  map: null
};
const Skill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active_image_class;
  let active_container_class;
  let { skill } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  $$result.css.add(css);
  active_image_class = "image-small";
  active_container_class = "skill-container-small";
  return `

<div class="${escape(null_to_empty(active_container_class), true) + " svelte-1azds9j"}"><img${add_attribute("alt", skill.name, 0)} class="${escape(null_to_empty(active_image_class), true) + " svelte-1azds9j"}"${add_attribute("src", `${base}${skill.image}`, 0)}>
</div>`;
});
export {
  Skill as S
};
