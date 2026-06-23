import { c as create_ssr_component, e as escape, d as null_to_empty, b as add_attribute } from "./index.js";
import { b as base } from "./shared.js";
const Skill_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skill-container-large.svelte-1qff3x7.svelte-1qff3x7{height:100px;width:100px;display:flex;justify-content:center;align-items:center;border-radius:0;overflow:visible;border:2px solid #1a1a1a;background:rgba(0, 0, 0, 0.3);box-shadow:inset 0 0 10px rgba(0, 0, 0, 0.5),\n      0 0 10px rgba(0, 0, 0, 0.3);transition:transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease}.skill-container-large.svelte-1qff3x7.svelte-1qff3x7:hover{transform:scale(1.1);border-color:#8b0000;box-shadow:inset 0 0 15px rgba(0, 0, 0, 0.6),\n      0 0 20px rgba(0, 0, 0, 0.5),\n      0 0 30px rgba(139, 0, 0, 0.4)}.skill-container-small.svelte-1qff3x7.svelte-1qff3x7{height:125px;width:125px;display:flex;justify-content:center;align-items:center;margin-top:5px;border-radius:0;overflow:visible;border:2px solid #1a1a1a;background:rgba(0, 0, 0, 0.3);box-shadow:inset 0 0 10px rgba(0, 0, 0, 0.5),\n      0 0 10px rgba(0, 0, 0, 0.3);transition:transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease}.skill-container-small.svelte-1qff3x7.svelte-1qff3x7:hover{transform:scale(1.1);border-color:#8b0000;box-shadow:inset 0 0 15px rgba(0, 0, 0, 0.6),\n      0 0 20px rgba(0, 0, 0, 0.5),\n      0 0 30px rgba(139, 0, 0, 0.4)}.image-large.svelte-1qff3x7.svelte-1qff3x7{height:80px;width:80px;filter:brightness(0.8) contrast(1.2);transition:filter 0.3s ease}.skill-container-large.svelte-1qff3x7:hover .image-large.svelte-1qff3x7{filter:brightness(0.9) contrast(1.3)}.image-small.svelte-1qff3x7.svelte-1qff3x7{height:100px;width:100px;filter:brightness(0.8) contrast(1.2);transition:filter 0.3s ease}.skill-container-small.svelte-1qff3x7:hover .image-small.svelte-1qff3x7{filter:brightness(0.9) contrast(1.3)}",
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

<div class="${escape(null_to_empty(active_container_class), true) + " svelte-1qff3x7"}"><img${add_attribute("alt", skill.name, 0)} class="${escape(null_to_empty(active_image_class), true) + " svelte-1qff3x7"}"${add_attribute("src", `${base}${skill.image}`, 0)}>
</div>`;
});
export {
  Skill as S
};
