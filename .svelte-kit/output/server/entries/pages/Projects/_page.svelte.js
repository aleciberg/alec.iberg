import { c as create_ssr_component, e as escape, f as each, d as null_to_empty, b as add_attribute } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects-container.svelte-1jxinm1{display:grid;gap:12px;grid-template-columns:auto auto;overflow:scroll}.projects-container-small.svelte-1jxinm1{display:grid;gap:12px;grid-template-columns:auto;overflow:scroll}.image.svelte-1jxinm1{height:300px;width:300px;border-radius:14px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = {
    "Noncompete Length": {
      name: "noncompete",
      link: "https://github.com/aleciberg/noncompete",
      image: "/images/noncompete.png"
    },
    // 'CLI Crypto': {
    //   name: 'clicrypto',
    //   link: 'https://github.com/aleciberg/CLI_crypto',
    //   image: '/images/clicrypto.gif',
    // },
    "CRWN CLOTHING": {
      name: "Crwn Clothing",
      link: "https://github.com/aleciberg",
      image: "/images/crwnclothing.png"
    },
    "Movie Fight": {
      name: "Movie Fight",
      link: "https://github.com/aleciberg/movieFight",
      image: "/images/moviefight.png"
    },
    "Weather App": {
      name: "Weather App",
      link: "https://github.com/aleciberg/AirQualityViewer",
      image: "/images/weatherApp.gif"
    }
  };
  $$result.css.add(css);
  return `

<div class="${escape(
    null_to_empty("projects-container-small"),
    true
  ) + " svelte-1jxinm1"}">${each(Object.entries(projects), ([project, props]) => {
    return `<div class="${"project"}"><p>${escape(project)}</p>
      <a target="${"_blank"}"${add_attribute("href", props.link, 0)}><img class="${"image svelte-1jxinm1"}"${add_attribute("src", props.image, 0)}></a>
    </div>`;
  })}
</div>`;
});
export {
  Page as default
};
