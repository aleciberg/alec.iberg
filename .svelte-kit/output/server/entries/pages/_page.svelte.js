import { c as create_ssr_component, b as add_attribute, e as escape, d as null_to_empty, f as each, v as validate_component } from "../../chunks/index.js";
import { b as base } from "../../chunks/shared.js";
import { S as Skill } from "../../chunks/Skill.js";
import { T as Typewriter } from "../../chunks/Typewriter.js";
const Title_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".title-container.svelte-106loeb{width:60vw;display:flex;align-items:center;margin:10px}.title-bar.svelte-106loeb{color:#76abae;font-size:48px;margin-left:30px}.image.svelte-106loeb{height:200px;width:150px;border-radius:100px;border:2px solid #FF1493}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("in play");
  $$result.css.add(css$5);
  return `<div class="${"title-container svelte-106loeb"}"><div class="${"image-container"}"><img class="${"image svelte-106loeb"}"${add_attribute("src", `${base}/images/alec.png`, 0)} alt="${"Alec"}"></div>
  <h1 class="${"title-bar svelte-106loeb"}">Alec Iberg</h1>
</div>`;
});
const Bio_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".bio-text.svelte-1mscbmu{color:#eeeeee;font-size:24px;margin:20px;border-bottom:3px solid rgba(118, 171, 174, 0.5);border-top:3px solid rgba(118, 171, 174, 0.5)}.attention.svelte-1mscbmu{color:#76abae}@keyframes svelte-1mscbmu-blink{0%{opacity:1}50%{opacity:0}100%{opacity:1}}@keyframes svelte-1mscbmu-pulse{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}@keyframes svelte-1mscbmu-border-flash{0%{border-color:#76abae}50%{border-color:white}100%{border-color:#76abae}}@keyframes svelte-1mscbmu-underline-color-change{0%{text-decoration-color:#76abae}50%{text-decoration-color:white}100%{text-decoration-color:#76abae}}",
  map: null
};
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"bio-text svelte-1mscbmu"}"><br>
  Hello, my name is <span class="${escape(null_to_empty("attention"), true) + " svelte-1mscbmu"}">Alec Iberg.</span>
  <br>
  <br>
  I currently work as a Full Stack Developer at <a hfref="${"https://cynchealth.org"}">CyncHealth</a>, supporting the backend architecure to ingest HL7 messages and the front end portal to support healthcare facilities in Nebraska and Iowa.  
  <br>
  <br>
  ${escape(" ")}
  As for my personal life, I really enjoy the${escape(" ")}
  <span class="${"attention svelte-1mscbmu"}">outdoors</span>- you can usually find me camping,
  hiking, or backpacking on a weekend. I am fortunate enough to
  <span class="${"target"}">live in Portland</span> and be surrounded by some of our
  nation&#39;s best outdoor beauty.${escape(" ")}
  <span class="${escape(null_to_empty("attention"), true) + " svelte-1mscbmu"}">Mount Hood</span> is probably my favorite.
  Additionally, I am a huge College Football fan (GO BUCKEYES!), a big hockey
  fan, and I very much enjoy spending time with my dog,
  <span class="${escape(null_to_empty("attention"), true) + " svelte-1mscbmu"}">Juniper.</span> She is a 4 year old Border Collie
  with unlimited energy.
  <br>
  <br>
</div>`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".skills-holder.svelte-1s89c5l{width:100vw;height:10%;margin:auto;text-align:center;border-bottom:3px solid rgba(118, 171, 174, 0.5)}.skills-container.svelte-1s89c5l{display:flex;overflow:scroll;flex-direction:row;align-items:center;justify-content:center;gap:10px}.skills-container-small.svelte-1s89c5l{display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:2px;height:100%;overflow:scroll}h1.svelte-1s89c5l{font-size:48px;color:#76abae}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const skills = [
    {
      name: "TypeScript",
      image: "/images/typescript.png"
    },
    {
      name: "React",
      image: "/images/react.png"
    },
    { name: "Node", image: "/images/node.png" },
    {
      name: "GoLang",
      image: "/images/golang.png"
    },
    { name: "AWS", image: "/images/aws.png" },
    {
      name: "Postgres",
      image: "/images/postgres.png"
    },
    {
      name: "JavaScript",
      image: "/images/js.png"
    },
    {
      name: "Svelte",
      image: "/images/svelte.png"
    },
    {
      name: "Docker",
      image: "/images/docker.png"
    },
    { name: "GCP", image: "/images/gcp.png" },
    {
      name: "Git",
      image: "/images/gitbash.png"
    },
    {
      name: "CI/CD",
      image: "/images/gitlab-ci.png"
    }
  ];
  $$result.css.add(css$3);
  return `

<div class="${"skills-holder svelte-1s89c5l"}"><h1 class="${"svelte-1s89c5l"}">Skills</h1>
  <div class="${escape(
    null_to_empty("skills-container"),
    true
  ) + " svelte-1s89c5l"}">${each(skills, (skill) => {
    return `<div class="${"skill"}">${validate_component(Skill, "Skill").$$render($$result, { skill }, {}, {})}
      </div>`;
  })}</div>
  <br>
  <br>
  <br>
  <br>
</div>`;
});
const Projects_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".showcase-container.svelte-jmjq45{width:60%;margin:20px auto;padding:20px;background-color:rgba(118, 171, 174, 0.1);border:2px solid #FF1493;border-radius:12px;text-align:center}.showcase-title.svelte-jmjq45{font-size:36px;color:#76abae}.showcase-image.svelte-jmjq45{width:100%;max-width:600px;border-radius:12px;margin-top:10px}.showcase-description.svelte-jmjq45{font-size:18px;color:#76abae;margin-top:15px}.skills-holder.svelte-jmjq45{width:100vw;text-align:center;align-items:center;border-bottom:3px solid rgba(118, 171, 174, 0.5)}h1.svelte-jmjq45{font-size:48px;color:#76abae;margin-bottom:20px}.projects-container.svelte-jmjq45,.projects-container-small.svelte-jmjq45{display:flex;flex-wrap:wrap;justify-content:center;gap:20px;padding:20px}.project-card.svelte-jmjq45{background-color:rgba(118, 171, 174, 0.05);padding:15px;border:2px solid #FF1493;border-radius:10px;width:220px;text-align:center;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1)}.project-title.svelte-jmjq45{color:#76abae;margin-bottom:10px;font-size:16px;font-weight:bold}.project-image.svelte-jmjq45{width:100%;max-width:200px;height:auto;border-radius:10px;margin-top:10px}.projects-container-small.svelte-jmjq45{display:grid;gap:15px;grid-template-columns:repeat(auto-fit, minmax(150px, 1fr))}@media(max-width: 768px){.projects-container.svelte-jmjq45{flex-direction:column;align-items:center}.project-card.svelte-jmjq45{width:90%;margin-bottom:15px}.project-image.svelte-jmjq45{height:auto;max-width:100%}}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const showcaseProject = {
    name: "Cosmic Cargo Network",
    description: "Cosmic Cargo Network is a mock company I am building to practice GoLang and more front end development. Cosmic Cargo Network is a galactic shipping organization that services 3 superclusters, 6 galaxies, and 50 planets. We provide various APIs from distance calculators to pricing quotes to availability statuses.",
    link: "https://github.com/aleciberg/cosmiccargonetwork",
    image: "/images/cosmic_cargo_network.png"
  };
  const projects = {
    "Noncompete Length": {
      name: "noncompete",
      link: "https://github.com/aleciberg/noncompete",
      image: "/images/noncompete.png"
    },
    "CLI Crypto": {
      name: "clicrypto",
      link: "https://github.com/aleciberg/CLI_crypto",
      image: "/images/clicrypto.gif"
    },
    "CRWN CLOTHING": {
      name: "Crwn Clothing",
      link: "https://github.com/aleciberg",
      image: "/images/crwnclothing.png"
    },
    "Movie Fight": {
      name: "Movie Fight",
      link: "https://github.com/aleciberg/movieFight",
      image: "/images/moviefight.png"
    }
  };
  $$result.css.add(css$2);
  return `

<div class="${"skills-holder svelte-jmjq45"}"><h1 class="${"svelte-jmjq45"}">Projects</h1>

  <div class="${"showcase-container svelte-jmjq45"}"><h2 class="${"showcase-title svelte-jmjq45"}">${escape(showcaseProject.name)}</h2>
    <a target="${"_blank"}"${add_attribute("href", showcaseProject.link, 0)}><img class="${"showcase-image svelte-jmjq45"}"${add_attribute("src", showcaseProject.image, 0)}></a>
    <p class="${"showcase-description svelte-jmjq45"}">${escape(showcaseProject.description)}</p></div>

  <div class="${escape(
    null_to_empty("projects-container"),
    true
  ) + " svelte-jmjq45"}">${each(Object.entries(projects), ([project, props]) => {
    return `<div class="${"project-card svelte-jmjq45"}"><p class="${"project-title svelte-jmjq45"}">${escape(project)}</p>
        <a target="${"_blank"}"${add_attribute("href", props.link, 0)}><img class="${"project-image svelte-jmjq45"}"${add_attribute("src", props.image, 0)}></a>
      </div>`;
  })}</div>
</div>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".contact-container.svelte-jn8ikz{text-align:center;height:30vh}.written-line.svelte-jn8ikz{color:#76abae;padding:20px}.link.svelte-jn8ikz{color:white}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty("contact-container"), true) + " svelte-jn8ikz"}">${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "cascade", interval: 100 }, {}, {
    default: () => {
      return `<h2 class="${"written-line svelte-jn8ikz"}">Check out my <a class="${"link svelte-jn8ikz"}" href="${"https://github.com/aleciberg"}" target="${"_blank"}">GitHub</a></h2>
    <h2 class="${"written-line svelte-jn8ikz"}">Check out my <a class="${"link svelte-jn8ikz"}" href="${"https://linkedin.com/in/aleciberg"}" target="${"_blank"}">LinkedIn
      </a></h2>
    <h2 class="${"written-line svelte-jn8ikz"}">Email Me <a class="${"link svelte-jn8ikz"}" href="${"mailto: ibergalec@icloud.com"}" target="${"_blank"}">Here</a></h2>`;
    }
  })}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".base-page-container.svelte-j9v30z{width:100vw;overflow:hidden;display:flex;flex-direction:column}.top-level.svelte-j9v30z{display:flex;flex-direction:row}.bio-container.svelte-j9v30z{width:100%;margin-top:60px}.skills-container.svelte-j9v30z{border:10px soild blue}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"base-page-container svelte-j9v30z"}"><div class="${"top-level svelte-j9v30z"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {})}</div>
  <div class="${"bio-container svelte-j9v30z"}">${validate_component(Bio, "Bio").$$render($$result, {}, {}, {})}</div>
  <div class="${"skills-container svelte-j9v30z"}">${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}</div>
  ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
  ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
