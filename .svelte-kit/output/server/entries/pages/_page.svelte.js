import { c as create_ssr_component, b as add_attribute, e as escape, d as null_to_empty, f as each, v as validate_component } from "../../chunks/index.js";
import { b as base } from "../../chunks/shared.js";
import { S as Skill } from "../../chunks/Skill.js";
import { T as Typewriter } from "../../chunks/Typewriter.js";
const Title_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".title-container.svelte-1vuxm8u{width:100vw;display:flex;flex-direction:column;align-items:center;justify-content:center;margin:40px 0;padding:40px 0}.image-wrapper.svelte-1vuxm8u{position:relative;display:flex;justify-content:center;align-items:center;margin-bottom:30px}.image-glow.svelte-1vuxm8u{position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle, rgba(139, 0, 0, 0.3) 0%, transparent 70%);animation:svelte-1vuxm8u-pulse-glow 3s ease-in-out infinite;z-index:0}@keyframes svelte-1vuxm8u-pulse-glow{0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.8;transform:scale(1.1)}}.image.svelte-1vuxm8u{position:relative;height:350px;width:350px;border-radius:50%;border:5px solid #1a1a1a;box-shadow:0 0 20px rgba(0, 0, 0, 0.8),\n      0 0 40px rgba(139, 0, 0, 0.3),\n      inset 0 0 30px rgba(0, 0, 0, 0.5);z-index:1;filter:grayscale(60%) \n      contrast(1.4) \n      brightness(0.7) \n      saturate(0.3)\n      sepia(20%);transition:transform 0.3s ease, filter 0.3s ease}.image.svelte-1vuxm8u:hover{transform:scale(1.05);filter:grayscale(40%) \n      contrast(1.5) \n      brightness(0.75) \n      saturate(0.4)\n      sepia(30%);box-shadow:0 0 30px rgba(0, 0, 0, 0.9),\n      0 0 60px rgba(139, 0, 0, 0.5),\n      inset 0 0 40px rgba(0, 0, 0, 0.6)}.title-bar.svelte-1vuxm8u{color:#ffffff;font-size:72px;font-family:'UnifrakturMaguntia', cursive;text-shadow:3px 3px 0px #000000,\n      0 0 20px rgba(139, 0, 0, 0.5),\n      0 0 40px rgba(139, 0, 0, 0.3);letter-spacing:4px;margin:0;text-align:center}@media(max-width: 768px){.image.svelte-1vuxm8u{height:250px;width:250px}.image-glow.svelte-1vuxm8u{width:300px;height:300px}.title-bar.svelte-1vuxm8u{font-size:48px}}",
  map: null
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log("in play");
  $$result.css.add(css$5);
  return `<div class="${"title-container svelte-1vuxm8u"}"><div class="${"image-wrapper svelte-1vuxm8u"}"><div class="${"image-glow svelte-1vuxm8u"}"></div>
    <img class="${"image svelte-1vuxm8u"}"${add_attribute("src", `${base}/images/alec.png`, 0)} alt="${"Alec"}"></div>
  <h1 class="${"title-bar svelte-1vuxm8u"}">Alec Iberg</h1>
</div>`;
});
const Bio_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".bio-text.svelte-1vyeqj1{color:#e0e0e0;font-size:24px;font-family:'MedievalSharp', cursive;margin:40px;padding:30px;border-bottom:4px solid #1a1a1a;border-top:4px solid #1a1a1a;background:linear-gradient(to bottom, rgba(26, 26, 26, 0.3), rgba(0, 0, 0, 0.3));box-shadow:inset 0 0 30px rgba(0, 0, 0, 0.5),\n      0 0 20px rgba(0, 0, 0, 0.3);line-height:1.8;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.8)}.attention.svelte-1vyeqj1{color:#ffffff;font-weight:bold;text-shadow:0 0 10px rgba(139, 0, 0, 0.5),\n      2px 2px 4px rgba(0, 0, 0, 0.9)}@keyframes svelte-1vyeqj1-blink{0%{opacity:1}50%{opacity:0.3}100%{opacity:1}}@keyframes svelte-1vyeqj1-pulse{0%{transform:scale(1)}50%{transform:scale(1.05)}100%{transform:scale(1)}}@keyframes svelte-1vyeqj1-border-flash{0%{border-color:#1a1a1a}50%{border-color:#8b0000}100%{border-color:#1a1a1a}}@keyframes svelte-1vyeqj1-underline-color-change{0%{text-decoration-color:#ffffff}50%{text-decoration-color:#8b0000}100%{text-decoration-color:#ffffff}}",
  map: null
};
const Bio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"bio-text svelte-1vyeqj1"}"><br>
  Hello, my name is <span class="${escape(null_to_empty("attention"), true) + " svelte-1vyeqj1"}">Alec Iberg.</span>
  <br>
  <br>
  I am a Full Stack Software Engineer, currently working at <a href="${"https://immuta.com"}">Immuta</a> to advance the future of Data Provisioning.  
  <br>
  <br>
  ${escape(" ")}
  As for my personal life, I really enjoy the${escape(" ")}
  <span class="${"attention svelte-1vyeqj1"}">outdoors</span>- you can usually find me camping,
  hiking, or backpacking on a weekend. I am fortunate enough to
  <span class="${"target"}">live in Portland</span> and be surrounded by some of our
  nation&#39;s best outdoor beauty.${escape(" ")}
  <span class="${escape(null_to_empty("attention"), true) + " svelte-1vyeqj1"}">Mount Hood</span> is probably my favorite.
  Additionally, I am a huge College Football fan (GO BUCKEYES!), a big hockey
  fan, and I very much enjoy spending time with my dog,
  <span class="${escape(null_to_empty("attention"), true) + " svelte-1vyeqj1"}">Juniper.</span> She is a 5 year old Border Collie
  with unlimited energy.
  <br>
  <br>
</div>`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".skills-holder.svelte-1ytz76m{width:100vw;height:10%;margin:auto;text-align:center;border-bottom:4px solid #1a1a1a;border-top:4px solid #1a1a1a;padding:40px 0;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 0.2))}.skills-container.svelte-1ytz76m{display:flex;overflow:scroll;flex-direction:row;align-items:center;justify-content:center;gap:20px;padding:20px}.skills-container-small.svelte-1ytz76m{display:grid;grid-template-columns:1fr 1fr 1fr;column-gap:10px;row-gap:10px;height:100%;overflow:scroll;padding:20px}h1.svelte-1ytz76m{font-size:64px;font-family:'UnifrakturMaguntia', cursive;color:#ffffff;text-shadow:3px 3px 0px #000000,\n      0 0 20px rgba(139, 0, 0, 0.5),\n      0 0 40px rgba(139, 0, 0, 0.3);letter-spacing:3px;margin-bottom:30px}.skill.svelte-1ytz76m{filter:brightness(0.8) contrast(1.2);transition:transform 0.3s ease, filter 0.3s ease}.skill.svelte-1ytz76m:hover{transform:scale(1.1);filter:brightness(1) contrast(1.3) drop-shadow(0 0 10px rgba(139, 0, 0, 0.5))}",
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

<div class="${"skills-holder svelte-1ytz76m"}"><h1 class="${"svelte-1ytz76m"}">Skills</h1>
  <div class="${escape(
    null_to_empty("skills-container"),
    true
  ) + " svelte-1ytz76m"}">${each(skills, (skill) => {
    return `<div class="${"skill svelte-1ytz76m"}">${validate_component(Skill, "Skill").$$render($$result, { skill }, {}, {})}
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
  code: ".showcase-container.svelte-kyurps.svelte-kyurps{width:80%;margin:40px auto;padding:30px;background:linear-gradient(to bottom, rgba(26, 26, 26, 0.4), rgba(0, 0, 0, 0.4));border:4px solid #1a1a1a;border-radius:0;text-align:center;box-shadow:inset 0 0 30px rgba(0, 0, 0, 0.6),\n      0 0 40px rgba(0, 0, 0, 0.5),\n      0 0 60px rgba(139, 0, 0, 0.2)}.showcase-title.svelte-kyurps.svelte-kyurps{font-size:48px;font-family:'UnifrakturMaguntia', cursive;color:#ffffff;text-shadow:3px 3px 0px #000000,\n      0 0 20px rgba(139, 0, 0, 0.5);letter-spacing:3px;margin-bottom:20px}.showcase-image.svelte-kyurps.svelte-kyurps{width:100%;max-width:700px;border-radius:0;margin-top:20px;border:3px solid #1a1a1a;box-shadow:0 0 20px rgba(0, 0, 0, 0.8),\n      0 0 40px rgba(139, 0, 0, 0.2);filter:brightness(0.85) contrast(1.1);transition:transform 0.3s ease, filter 0.3s ease}.showcase-image.svelte-kyurps.svelte-kyurps:hover{transform:scale(1.02);filter:brightness(0.9) contrast(1.15);box-shadow:0 0 30px rgba(0, 0, 0, 0.9),\n      0 0 60px rgba(139, 0, 0, 0.4)}.showcase-description.svelte-kyurps.svelte-kyurps{font-size:20px;font-family:'MedievalSharp', cursive;color:#e0e0e0;margin-top:20px;line-height:1.6;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.8)}.skills-holder.svelte-kyurps.svelte-kyurps{width:100vw;text-align:center;align-items:center;border-bottom:4px solid #1a1a1a;border-top:4px solid #1a1a1a;padding:40px 0;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 0.2))}h1.svelte-kyurps.svelte-kyurps{font-size:64px;font-family:'UnifrakturMaguntia', cursive;color:#ffffff;text-shadow:3px 3px 0px #000000,\n      0 0 20px rgba(139, 0, 0, 0.5),\n      0 0 40px rgba(139, 0, 0, 0.3);letter-spacing:3px;margin-bottom:30px}.projects-container.svelte-kyurps.svelte-kyurps,.projects-container-small.svelte-kyurps.svelte-kyurps{display:flex;flex-wrap:wrap;justify-content:center;gap:30px;padding:40px 20px}.project-card.svelte-kyurps.svelte-kyurps{background:linear-gradient(to bottom, rgba(26, 26, 26, 0.5), rgba(0, 0, 0, 0.5));padding:20px;border:3px solid #1a1a1a;border-radius:0;width:250px;text-align:center;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.6),\n      0 0 20px rgba(0, 0, 0, 0.5),\n      0 0 30px rgba(139, 0, 0, 0.2);transition:transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease}.project-card.svelte-kyurps.svelte-kyurps:hover{transform:translateY(-5px);border-color:#8b0000;box-shadow:inset 0 0 30px rgba(0, 0, 0, 0.7),\n      0 0 30px rgba(0, 0, 0, 0.7),\n      0 0 50px rgba(139, 0, 0, 0.4)}.project-title.svelte-kyurps.svelte-kyurps{color:#ffffff;margin-bottom:15px;font-size:18px;font-family:'MedievalSharp', cursive;font-weight:bold;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.9),\n      0 0 10px rgba(139, 0, 0, 0.5)}.project-image.svelte-kyurps.svelte-kyurps{width:100%;max-width:220px;height:auto;border-radius:0;margin-top:10px;border:2px solid #1a1a1a;filter:brightness(0.8) contrast(1.2);transition:filter 0.3s ease, transform 0.3s ease}.project-card.svelte-kyurps:hover .project-image.svelte-kyurps{filter:brightness(0.9) contrast(1.3);transform:scale(1.05)}.projects-container-small.svelte-kyurps.svelte-kyurps{display:grid;gap:20px;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr))}@media(max-width: 768px){.showcase-container.svelte-kyurps.svelte-kyurps{width:95%;padding:20px}.showcase-title.svelte-kyurps.svelte-kyurps{font-size:36px}.projects-container.svelte-kyurps.svelte-kyurps{flex-direction:column;align-items:center}.project-card.svelte-kyurps.svelte-kyurps{width:90%;margin-bottom:20px}.project-image.svelte-kyurps.svelte-kyurps{height:auto;max-width:100%}h1.svelte-kyurps.svelte-kyurps{font-size:48px}}",
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

<div class="${"skills-holder svelte-kyurps"}"><h1 class="${"svelte-kyurps"}">Projects</h1>

  <div class="${"showcase-container svelte-kyurps"}"><h2 class="${"showcase-title svelte-kyurps"}">${escape(showcaseProject.name)}</h2>
    <a target="${"_blank"}"${add_attribute("href", showcaseProject.link, 0)}><img class="${"showcase-image svelte-kyurps"}"${add_attribute("src", showcaseProject.image, 0)}></a>
    <p class="${"showcase-description svelte-kyurps"}">${escape(showcaseProject.description)}</p></div>

  <div class="${escape(
    null_to_empty("projects-container"),
    true
  ) + " svelte-kyurps"}">${each(Object.entries(projects), ([project, props]) => {
    return `<div class="${"project-card svelte-kyurps"}"><p class="${"project-title svelte-kyurps"}">${escape(project)}</p>
        <a target="${"_blank"}"${add_attribute("href", props.link, 0)}><img class="${"project-image svelte-kyurps"}"${add_attribute("src", props.image, 0)}></a>
      </div>`;
  })}</div>
</div>`;
});
const Contact_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".contact-container.svelte-1ayma0j{text-align:center;min-height:30vh;padding:60px 20px;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(26, 26, 26, 0.3));border-top:4px solid #1a1a1a}.written-line.svelte-1ayma0j{color:#ffffff;padding:25px;font-family:'MedievalSharp', cursive;font-size:24px;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.9),\n      0 0 15px rgba(139, 0, 0, 0.5)}.link.svelte-1ayma0j{color:#ffffff;text-decoration:none;text-shadow:0 0 10px rgba(139, 0, 0, 0.8),\n      2px 2px 4px rgba(0, 0, 0, 0.9);transition:text-shadow 0.3s ease;border-bottom:2px solid transparent}.link.svelte-1ayma0j:hover{text-shadow:0 0 20px rgba(139, 0, 0, 1),\n      0 0 30px rgba(139, 0, 0, 0.6),\n      2px 2px 4px rgba(0, 0, 0, 0.9);border-bottom-color:#8b0000}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${escape(null_to_empty("contact-container"), true) + " svelte-1ayma0j"}">${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "cascade", interval: 100 }, {}, {
    default: () => {
      return `<h2 class="${"written-line svelte-1ayma0j"}">Check out my <a class="${"link svelte-1ayma0j"}" href="${"https://github.com/aleciberg"}" target="${"_blank"}">GitHub</a></h2>
    <h2 class="${"written-line svelte-1ayma0j"}">Check out my <a class="${"link svelte-1ayma0j"}" href="${"https://linkedin.com/in/aleciberg"}" target="${"_blank"}">LinkedIn
      </a></h2>
    <h2 class="${"written-line svelte-1ayma0j"}">Email Me <a class="${"link svelte-1ayma0j"}" href="${"mailto: ibergalec@icloud.com"}" target="${"_blank"}">Here</a></h2>`;
    }
  })}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".base-page-container.svelte-1ls2rz7{width:100vw;overflow-x:hidden;display:flex;flex-direction:column;background-color:#000000;min-height:100vh}.bio-container.svelte-1ls2rz7{width:100%;margin-top:20px}.skills-container.svelte-1ls2rz7{width:100%}.video-container.svelte-1ls2rz7{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:60px 20px;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(26, 26, 26, 0.3));border-top:4px solid #1a1a1a;border-bottom:4px solid #1a1a1a}.video-title.svelte-1ls2rz7{font-size:48px;font-family:'UnifrakturMaguntia', cursive;color:#ffffff;text-shadow:3px 3px 0px #000000,\n      0 0 20px rgba(139, 0, 0, 0.5),\n      0 0 40px rgba(139, 0, 0, 0.3);letter-spacing:3px;margin-bottom:30px;text-align:center}@media(max-width: 768px){.video-title.svelte-1ls2rz7{font-size:36px}}.video-wrapper.svelte-1ls2rz7{position:relative;width:100%;max-width:900px;padding-bottom:56.25%;height:0;box-shadow:0 0 30px rgba(0, 0, 0, 0.8),\n      0 0 60px rgba(139, 0, 0, 0.3),\n      inset 0 0 40px rgba(0, 0, 0, 0.5);border:5px solid #1a1a1a}.youtube-embed.svelte-1ls2rz7{position:absolute;top:0;left:0;width:100%;height:100%;filter:brightness(0.85) contrast(1.1)}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"base-page-container svelte-1ls2rz7"}">${validate_component(Title, "Title").$$render($$result, {}, {}, {})}
  <div class="${"bio-container svelte-1ls2rz7"}">${validate_component(Bio, "Bio").$$render($$result, {}, {}, {})}</div>
  <div class="${"skills-container svelte-1ls2rz7"}">${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}</div>
  <div class="${"video-container svelte-1ls2rz7"}"><h2 class="${"video-title svelte-1ls2rz7"}">Current Favorite Music</h2>
    <div class="${"video-wrapper svelte-1ls2rz7"}"><iframe src="${"https://www.youtube.com/embed/O9WYceFbHw4?si=5n3pji-Tq9LOIqbQ"}" title="${"Black Metal Music Video"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"youtube-embed svelte-1ls2rz7"}"></iframe></div></div>
  ${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}
  ${validate_component(Contact, "Contact").$$render($$result, {}, {}, {})}
</div>`;
});
export {
  Page as default
};
