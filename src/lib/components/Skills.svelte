<script>
  import Skill from "$lib/components/Skill.svelte";

  let innerWidth;

  const skills = [
    { name: "TypeScript", image: "/images/typescript.png" },
    { name: "Svelte", image: "/images/svelte.png" },
    { name: "GoLang", image: "/images/golang.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "React", image: "/images/react.png" },
    { name: "Redux", image: "/images/Redux.png" },
    { name: "Git", image: "/images/gitbash.png" },
    { name: "CI/CD", image: "/images/gitlab-ci.png" },
    { name: "Jest", image: "/images/jest.png" },
    { name: "Node", image: "/images/node.png" },
  ];
</script>

<svelte:window bind:innerWidth />

<div class="skills-holder">
  <h1>Skills</h1>
  <div class={innerWidth < 600 ? "skills-container-small" : "skills-container"}>
    {#each skills as skill}
      <div class="skill">
        <Skill {skill} />
      </div>
    {/each}
  </div>
  <br />
  <br />
</div>

<style>
  .skills-holder {
    width: 100vw;
    margin: auto;
    text-align: center;
    border-bottom: 3px solid rgba(118, 171, 174, 0.5);
  }
  .skills-container {
    display: grid;
    overflow: scroll;
    align-items: center;
    justify-content: center;
    width: 80vw;
    /* gap: 5px; */
    grid-template-columns: auto auto auto auto;
  }

  .skills-container-small {
    display: grid;
    overflow: scroll;
    gap: 5px;
    grid-template-columns: auto auto;
  }

  h1 {
    font-size: 48px;
    color: #76abae;
  }
</style>
