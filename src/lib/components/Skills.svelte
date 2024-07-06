<script>
  import Skill from "$lib/components/Skill.svelte";

  let innerWidth;

  const skills = [
    { name: "TypeScript", image: "/images/typescript.png" },
    { name: "Svelte", image: "/images/svelte.png" },
    { name: "GoLang", image: "/images/golang.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "Docker", image: "/images/docker.png" },
    { name: "Postgres", image: "/images/postgres.png" },
    { name: "Node", image: "/images/node.png" },
    { name: "React", image: "/images/react.png" },
    { name: "Git", image: "/images/gitbash.png" },
    { name: "CI/CD", image: "/images/gitlab-ci.png" },
    { name: "Jest", image: "/images/jest.png" },
  ];
</script>

<svelte:window bind:innerWidth />

<div class="skills-holder">
  <h1>Skills</h1>
  <div
    class={innerWidth < 1080 ? "skills-container-small" : "skills-container"}
  >
    {#each skills as skill}
      <div class="skill">
        <Skill {skill} />
      </div>
    {/each}
  </div>
  <br />
  <br />
  <br />
  <br />
</div>

<style>
  .skills-holder {
    width: 100vw;
    height: 10%;
    margin: auto;
    text-align: center;
    border-bottom: 3px solid rgba(118, 171, 174, 0.5);
  }
  .skills-container {
    display: flex;
    /* overflow: scroll; */
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .skills-container-small {
    /* display: flex;
    flex-wrap: row; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2px;
    height: 100%;
    /* overflow: scroll; */
    /* gap: 5px; */
  }

  h1 {
    font-size: 48px;
    color: #76abae;
  }
</style>
