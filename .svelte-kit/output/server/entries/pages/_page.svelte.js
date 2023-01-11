import { c as create_ssr_component, d as add_attribute, e as escape, f as null_to_empty, h as each, v as validate_component, i as is_promise, n as noop, j as is_void } from "../../chunks/index.js";
const Sidebar_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: ".sidebar-container.svelte-n2wiep{text-align:center;margin:auto;padding-top:50px;color:red;height:10vh;width:100vw;overflow:scroll}.link.svelte-n2wiep{font-size:30px;color:white;padding:55px;margin:5px}.selected.svelte-n2wiep{font-size:30px;color:#6f1d1b;padding:55px;margin:5px}.dropdown-container.svelte-n2wiep{display:flex;flex-direction:column;height:auto;width:200px;position:fixed;z-index:2;border:1px solid black;border-radius:10px}.dropdown.svelte-n2wiep{font-size:20px;background-color:darkgrey;padding:5px}.button.svelte-n2wiep{height:50px;width:50px;border-radius:10px;padding:2px}",
  map: null
};
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage = "About Me" } = $$props;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  $$result.css.add(css$9);
  return `

${`<div><button class="${"button svelte-n2wiep"}">||||</button></div>
	${``}`}`;
});
const alec = "/_app/immutable/assets/alec-a51b56cf.png";
const AboutMe_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".target.svelte-3yiyxb{color:#6f1d1b;font-weight:bold}.outdoors.svelte-3yiyxb{color:#57753f;font-weight:bold}.about-me-container.svelte-3yiyxb{width:70%;margin-top:10px;font-size:20px;overflow:scroll}.image.svelte-3yiyxb{height:200px;width:200px;border-radius:100px}.image-container.svelte-3yiyxb{text-align:center;margin-bottom:20px}",
  map: null
};
const AboutMe = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$8);
  return `<div class="${"about-me-container svelte-3yiyxb"}"><div class="${"image-container svelte-3yiyxb"}"><img class="${"image svelte-3yiyxb"}"${add_attribute("src", alec, 0)}></div>
  
  <div>Hello, I am <span class="${escape(null_to_empty("outdoors"), true) + " svelte-3yiyxb"}">Alec Iberg</span> and I am a Full Stack
    Developer.
    <br>
    <br>
    I currently work at Array, as a Full Stack Developer, building FinTech tools.
    I currently work with${escape(" ")}
    <span class="${"target svelte-3yiyxb"}">JavaScript, TypeScript, Svelte, NodeJS, and GoLang${escape(" ")}</span>
    and very much enjoy this stack. I always find great satisfaction in seeing my
    work produce
    <span class="${"target svelte-3yiyxb"}">meaningful </span>
    and
    <span class="${"target svelte-3yiyxb"}">measurable</span> results and I love being able to
    provide value to the FinTech space and improve access to credit for
    <span class="${"target svelte-3yiyxb"}">everyone.</span>${escape(" ")}</div>
  <br>
  <div>As for my personal life, I really enjoy the${escape(" ")}
    <span class="${"outdoors svelte-3yiyxb"}">outdoors</span>- you can usually find me camping,
    hiking, or backpacking on a weekend. I am fortunate enough to
    <span class="${"target svelte-3yiyxb"}">live in Southern California</span> and be surrounded
    by some of our nation&#39;s best National Parks.${escape(" ")}
    <span class="${escape(null_to_empty("outdoors"), true) + " svelte-3yiyxb"}">Joshua Tree</span> is probably my favorite.
    Additionally, I am a huge College Football fan (GO BUCKS!), a big hockey
    fan, and I very much enjoy spending time with my dog,
    <span class="${escape(null_to_empty("outdoors"), true) + " svelte-3yiyxb"}">Juniper.</span> She is a 2 year old Border Collie with
    unlimited energy.
  </div>
</div>`;
});
const gitlab = "/_app/immutable/assets/gitlab-ci-7a785278.png";
const jest = "/_app/immutable/assets/jest-1967318e.png";
const node = "/_app/immutable/assets/node-e9144c60.png";
const react = "/_app/immutable/assets/react-044fc58f.png";
const redux = "/_app/immutable/assets/redux-c880e932.png";
const typescript = "/_app/immutable/assets/typescript-a010798d.png";
const javascript = "/_app/immutable/assets/js-48d02175.png";
const gitbash = "/_app/immutable/assets/gitbash-5c7b9d82.png";
const svelte = "/_app/immutable/assets/svelte-edff2bcf.png";
const golang = "/_app/immutable/assets/golang-cdff83f6.png";
const Skill_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".skill-container.svelte-b9rkr3{height:200px;width:200px;justify-content:center;margin-top:10px;border-radius:14px;overflow:hidden}.image.svelte-b9rkr3{height:200px;width:200px}",
  map: null
};
const Skill = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { skill } = $$props;
  if ($$props.skill === void 0 && $$bindings.skill && skill !== void 0)
    $$bindings.skill(skill);
  $$result.css.add(css$7);
  return `<div class="${"skill-container svelte-b9rkr3"}"><img${add_attribute("alt", skill.name, 0)} class="${"image svelte-b9rkr3"}"${add_attribute("src", skill.image, 0)}>
</div>`;
});
const Skills_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".skills-container.svelte-oy57os{display:grid;overflow:scroll;gap:5px;grid-template-columns:auto auto auto}",
  map: null
};
const Skills = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const skills = [
    { name: "TypeScript", image: typescript },
    { name: "ReactJS", image: react },
    { name: "JavaScript", image: javascript },
    { name: "Svelte", image: svelte },
    { name: "NodeJS", image: node },
    { name: "Go", image: golang },
    { name: "Jest", image: jest },
    { name: "Redux", image: redux },
    { name: "CI/CD", image: gitlab },
    { name: "GitBash", image: gitbash }
  ];
  $$result.css.add(css$6);
  return `<div class="${"skills-container svelte-oy57os"}">${each(skills, (skill) => {
    return `<div class="${"skill svelte-oy57os"}">${validate_component(Skill, "Skill").$$render($$result, { skill }, {}, {})}
		</div>`;
  })}
</div>`;
});
const clicrypto = "/_app/immutable/assets/clicrypto-aac6de12.gif";
const crwnclothing = "/_app/immutable/assets/crwnclothing-f45a8a9f.png";
const moviefight = "/_app/immutable/assets/moviefight-fefeb73d.png";
const weatherApp = "/_app/immutable/assets/weatherApp-721c816d.gif";
const Projects_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".projects-container.svelte-1jxinm1{display:grid;gap:12px;grid-template-columns:auto auto;overflow:scroll}.projects-container-small.svelte-1jxinm1{display:grid;gap:12px;grid-template-columns:auto;overflow:scroll}.image.svelte-1jxinm1{height:300px;width:300px;border-radius:14px}",
  map: null
};
const Projects = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const projects = {
    "CLI Crypto": {
      name: "clicrypto",
      link: "https://github.com/aleciberg/CLI_crypto",
      image: clicrypto
    },
    "CRWN CLOTHING": {
      name: "Crwn Clothing",
      link: "https://github.com/aleciberg",
      image: crwnclothing
    },
    "Movie Fight": {
      name: "Movie Fight",
      link: "https://github.com/aleciberg/movieFight",
      image: moviefight
    },
    "Weather App": {
      name: "Weather App",
      link: "https://github.com/aleciberg/AirQualityViewer",
      image: weatherApp
    }
  };
  $$result.css.add(css$5);
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
const Resume_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".header-text.svelte-12zj9ve{color:#57753f}.link-text.svelte-12zj9ve{color:#6f1d1b}",
  map: null
};
const Resume = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"resume-container svelte-12zj9ve"}"><h1 class="${"header-text svelte-12zj9ve"}">Not Currently Job Hunting</h1>
  <a class="${"link-text svelte-12zj9ve"}" href="${"mailto: ibergalec@icloud.com"}"><h4>Please request here</h4></a>
</div>`;
});
const Typewriter_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@keyframes svelte-1gv2i7t-cursorFade{0%,100%{opacity:1}50%{opacity:0}}.typewriter-container.svelte-1gv2i7t *:not(.typing):not(.finished-typing):not([data-static]){display:none}.typewriter-container.svelte-1gv2i7t .finished-typing::after{content:none}.cursor.svelte-1gv2i7t .typing::after{content:'';width:var(--cursor-width, 1ch);height:2ch;display:inline-block;vertical-align:text-top;background-color:var(--cursor-color, #000000);animation:svelte-1gv2i7t-cursorFade 1.25s infinite}",
  map: null
};
const Typewriter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isLoopMode;
  let isFiniteCursorMode;
  let invalidCursorOnFinish;
  let invalidCursorOnDelay;
  let invalidLoopProps;
  let invalidScrambleProps;
  let unnecessaryCursorOnFinish;
  let delayPromise;
  let { mode = "concurrent" } = $$props;
  let { interval = 30 } = $$props;
  let { cursor = true } = $$props;
  let { keepCursorOnFinish = false } = $$props;
  let { delay = 0 } = $$props;
  let { showCursorOnDelay = false } = $$props;
  let { disabled = false } = $$props;
  let { element = "div" } = $$props;
  let { scrambleDuration = 3e3 } = $$props;
  let { scrambleSlowdown = true } = $$props;
  let { unwriteInterval = 30 } = $$props;
  let { wordInterval = 1500 } = $$props;
  const modes = {
    concurrent: () => import("../../chunks/concurrent.js"),
    cascade: () => import("../../chunks/cascade.js"),
    loop: () => import("../../chunks/loop.js"),
    loopOnce: () => import("../../chunks/loopOnce.js"),
    loopRandom: () => import("../../chunks/loopRandom.js"),
    scramble: () => import("../../chunks/scramble.js")
  };
  if ($$props.mode === void 0 && $$bindings.mode && mode !== void 0)
    $$bindings.mode(mode);
  if ($$props.interval === void 0 && $$bindings.interval && interval !== void 0)
    $$bindings.interval(interval);
  if ($$props.cursor === void 0 && $$bindings.cursor && cursor !== void 0)
    $$bindings.cursor(cursor);
  if ($$props.keepCursorOnFinish === void 0 && $$bindings.keepCursorOnFinish && keepCursorOnFinish !== void 0)
    $$bindings.keepCursorOnFinish(keepCursorOnFinish);
  if ($$props.delay === void 0 && $$bindings.delay && delay !== void 0)
    $$bindings.delay(delay);
  if ($$props.showCursorOnDelay === void 0 && $$bindings.showCursorOnDelay && showCursorOnDelay !== void 0)
    $$bindings.showCursorOnDelay(showCursorOnDelay);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.scrambleDuration === void 0 && $$bindings.scrambleDuration && scrambleDuration !== void 0)
    $$bindings.scrambleDuration(scrambleDuration);
  if ($$props.scrambleSlowdown === void 0 && $$bindings.scrambleSlowdown && scrambleSlowdown !== void 0)
    $$bindings.scrambleSlowdown(scrambleSlowdown);
  if ($$props.unwriteInterval === void 0 && $$bindings.unwriteInterval && unwriteInterval !== void 0)
    $$bindings.unwriteInterval(unwriteInterval);
  if ($$props.wordInterval === void 0 && $$bindings.wordInterval && wordInterval !== void 0)
    $$bindings.wordInterval(wordInterval);
  $$result.css.add(css$3);
  isLoopMode = /^loop(Once|Random)?$/.test(mode);
  isFiniteCursorMode = ["concurrent", "cascade", "loopOnce"].includes(mode);
  invalidCursorOnFinish = !isFiniteCursorMode && keepCursorOnFinish;
  invalidCursorOnDelay = delay < 1 && showCursorOnDelay;
  invalidLoopProps = !isLoopMode && ($$props.unwriteInterval || $$props.wordInterval);
  invalidScrambleProps = mode !== "scramble" && ($$props.scrambleDuration || $$props.scrambleSlowdown);
  unnecessaryCursorOnFinish = typeof keepCursorOnFinish === "number" && keepCursorOnFinish < 1;
  invalidCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' is compatible only with finite modes");
  invalidCursorOnDelay && console.warn("[svelte-typewriter] The prop 'showCursorOnDelay' has no effect if the delay is 0");
  invalidLoopProps && console.warn("[svelte-typewriter] The props 'unwriteInterval' and 'wordInterval' are only compatible with loop modes");
  invalidScrambleProps && console.warn("[svelte-typewriter] The props 'scrambleDuration' and 'scrambleSlowdown' are only compatible with scramble mode");
  unnecessaryCursorOnFinish && console.warn("[svelte-typewriter] The prop 'keepCursorOnFinish' has no effect with values lower than 1");
  delayPromise = () => new Promise((resolve) => setTimeout(() => resolve(delay), delay));
  return `<noscript>${slots.default ? slots.default({}) : ``}</noscript>

${disabled ? `<div class="${"typewriter-container svelte-1gv2i7t"}">${slots.default ? slots.default({}) : ``}</div>` : `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
            ${showCursorOnDelay ? `<div class="${"typewriter-container cursor svelte-1gv2i7t"}"><p class="${"typing"}"></p></div>` : ``}
        `;
    }
    return function() {
      return `
            ${function(__value2) {
        if (is_promise(__value2)) {
          __value2.then(null, noop);
          return ``;
        }
        return function(selectedMode) {
          return `
                ${((tag) => {
            return tag ? `<${element} class="${["typewriter-container svelte-1gv2i7t", cursor ? "cursor" : ""].join(" ").trim()}">${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
          })(element)}
            `;
        }();
      }(modes[mode]())}
        `;
    }();
  }(delayPromise())}`}`;
});
const Links_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".written-line.svelte-1gy8c8e{color:#57753f;padding:20px}.link.svelte-1gy8c8e{color:#6f1d1b}",
  map: null
};
const Links = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div>${validate_component(Typewriter, "Typewriter").$$render($$result, { mode: "cascade", interval: 100 }, {}, {
    default: () => {
      return `<h2 class="${"written-line svelte-1gy8c8e"}">Check out my <a class="${"link svelte-1gy8c8e"}" href="${"https://github.com/aleciberg"}" target="${"_blank"}">GitHub</a></h2>
		<h2 class="${"written-line svelte-1gy8c8e"}">Check out my <a class="${"link svelte-1gy8c8e"}" href="${"https://linkedin.com/in/aleciberg"}" target="${"_blank"}">LinkedIn</a></h2>
		<h2 class="${"written-line svelte-1gy8c8e"}">Email Me <a class="${"link svelte-1gy8c8e"}" href="${"mailto: ibergalec@icloud.com"}" target="${"_blank"}">Here</a></h2>`;
    }
  })}
</div>`;
});
const MainContainer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".main-container.svelte-hf33a5{border-radius:50px 50px 0 0;border:3px solid #6f1d1b;border-bottom:0px;height:80vh;width:60vw;position:fixed;left:50%;bottom:0%;transform:translate(-50%);background-color:lightgrey;display:flex;justify-content:center;opacity:85%}",
  map: null
};
const MainContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page = "About Me" } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  $$result.css.add(css$1);
  return `<div class="${"main-container svelte-hf33a5"}">
  ${page === "About Me" ? `${validate_component(AboutMe, "AboutMe").$$render($$result, {}, {}, {})}` : `${page === "Skills" ? `${validate_component(Skills, "Skills").$$render($$result, {}, {}, {})}` : `${page === "Projects" ? `${validate_component(Projects, "Projects").$$render($$result, {}, {}, {})}` : `${page === "Resume" ? `${validate_component(Resume, "Resume").$$render($$result, {}, {}, {})}` : `${page === "Links" ? `${validate_component(Links, "Links").$$render($$result, {}, {}, {})}` : ``}`}`}`}`}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".container.svelte-b86cce{position:relative;justify-content:center;background-image:url(../_assets/forest.svg);background-size:cover;height:100vh;width:100vw}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { currentPage = "About Me" } = $$props;
  const prerender = true;
  if ($$props.currentPage === void 0 && $$bindings.currentPage && currentPage !== void 0)
    $$bindings.currentPage(currentPage);
  if ($$props.prerender === void 0 && $$bindings.prerender && prerender !== void 0)
    $$bindings.prerender(prerender);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"container svelte-b86cce"}">${validate_component(Sidebar, "Sidebar").$$render(
      $$result,
      { currentPage },
      {
        currentPage: ($$value) => {
          currentPage = $$value;
          $$settled = false;
        }
      },
      {}
    )}
  ${validate_component(MainContainer, "MainContainer").$$render($$result, { page: currentPage }, {}, {})}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
