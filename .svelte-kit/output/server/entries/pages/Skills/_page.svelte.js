import { c as create_ssr_component, f as add_attribute, b as escape, d as null_to_empty, e as each, v as validate_component } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/shared.js";
const Skill_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".skill-container.svelte-3difmp{height:200px;width:200px;justify-content:center;margin-top:10px;border-radius:14px;overflow:hidden}.image-large.svelte-3difmp{height:200px;width:200px}.image-small.svelte-3difmp{height:150px;width:150px}",
  map: null
};
const Skill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let active_class;
  let { skill } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  $$result.css.add(css$1);
  active_class = "image-small";
  return `

<div class="${"skill-container svelte-3difmp"}"><img${add_attribute("alt", skill.name, 0)} class="${escape(null_to_empty(active_class), true) + " svelte-3difmp"}"${add_attribute("src", `${base}${skill.image}`, 0)}>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skills-container.svelte-eibj1x{display:grid;overflow:scroll;gap:5px;grid-template-columns:auto auto auto}.skills-container-small.svelte-eibj1x{display:grid;overflow:scroll;gap:5px;grid-template-columns:auto auto}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const skills = [
    {
      name: "TypeScript",
      image: "/images/typescript.png"
    },
    {
      name: "React",
      image: "/images/react.png"
    },
    {
      name: "Svelte",
      image: "/images/svelte.png"
    },
    {
      name: "JavaScript",
      image: "/images/js.png"
    },
    {
      name: "Redux",
      image: "/images/Redux.png"
    },
    {
      name: "Git",
      image: "/images/gitbash.png"
    },
    {
      name: "CI/CD",
      image: "/images/gitlab-ci.png"
    },
    { name: "Jest", image: "/images/jest.png" },
    {
      name: "GoLang",
      image: "/images/golang.png"
    },
    { name: "Node", image: "/images/node.png" }
  ];
  $$result.css.add(css);
  return `

<div class="${escape(
    null_to_empty("skills-container"),
    true
  ) + " svelte-eibj1x"}">${each(skills, (skill) => {
    return `<div class="${"skill svelte-eibj1x"}">${validate_component(Skill, "Skill").$$render($$result, { skill }, {}, {})}
    </div>`;
  })}
</div>`;
});
export {
  Page as default
};
