import { c as create_ssr_component, e as escape, f as each, d as null_to_empty, v as validate_component } from "../../../chunks/index.js";
import { S as Skill } from "../../../chunks/Skill.js";
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
      name: "Svelte",
      image: "/images/svelte.png"
    },
    {
      name: "GoLang",
      image: "/images/golang.png"
    },
    {
      name: "JavaScript",
      image: "/images/js.png"
    },
    {
      name: "React",
      image: "/images/react.png"
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
