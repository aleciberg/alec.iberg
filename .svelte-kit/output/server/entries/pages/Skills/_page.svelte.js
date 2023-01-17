import { c as create_ssr_component, f as add_attribute, e as each, v as validate_component } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/shared.js";
const Skill_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".skill-container.svelte-b9rkr3{height:200px;width:200px;justify-content:center;margin-top:10px;border-radius:14px;overflow:hidden}.image.svelte-b9rkr3{height:200px;width:200px}",
  map: null
};
const Skill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skill } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  $$result.css.add(css$1);
  return `<div class="${"skill-container svelte-b9rkr3"}"><img${add_attribute("alt", skill.name, 0)} class="${"image svelte-b9rkr3"}"${add_attribute("src", `${base}${skill.image}`, 0)}>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".skills-container.svelte-oy57os{display:grid;overflow:scroll;gap:5px;grid-template-columns:auto auto auto}",
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
  return `<div class="${"skills-container svelte-oy57os"}">${each(skills, (skill) => {
    return `<div class="${"skill svelte-oy57os"}">${validate_component(Skill, "Skill").$$render($$result, { skill }, {}, {})}
		</div>`;
  })}
</div>`;
});
export {
  Page as default
};
