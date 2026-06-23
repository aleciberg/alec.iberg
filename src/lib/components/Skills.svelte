<script>
  import Skill from "$lib/components/Skill.svelte";

  let innerWidth;
  $: large = innerWidth >= 1080;

  const skills = [
    { name: "TypeScript", image: "/images/typescript.png" },
    { name: "React", image: "/images/react.png" },
    { name: "Node", image: "/images/node.png" },
    { name: "GoLang", image: "/images/golang.png" },
    { name: "AWS", image: "/images/aws.png" },
    { name: "Postgres", image: "/images/postgres.png" },
    { name: "JavaScript", image: "/images/js.png" },
    { name: "Svelte", image: "/images/svelte.png" },
    { name: "Docker", image: "/images/docker.png" },
    { name: "GCP", image: "/images/gcp.png" },
    { name: "Git", image: "/images/gitbash.png" },
    { name: "CI/CD", image: "/images/gitlab-ci.png" },
  ];
</script>

<svelte:window bind:innerWidth />

<div class="skills-holder">
  <h1>Skills</h1>
  <div class={large ? "skills-container" : "skills-container-small"}>
    {#each skills as skill}
      <div class="skill">
        <Skill {skill} {large} />
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
    border-bottom: 4px solid #1a1a1a;
    border-top: 4px solid #1a1a1a;
    padding: 40px 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 0.2));
  }
  .skills-container {
    display: flex;
    overflow: scroll;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }

  .skills-container-small {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 10px;
    row-gap: 10px;
    height: 100%;
    overflow: scroll;
    padding: 20px;
  }

  h1 {
    font-size: 64px;
    font-family: 'UnifrakturMaguntia', cursive;
    color: #ffffff;
    text-shadow: 
      3px 3px 0px #000000,
      0 0 20px rgba(139, 0, 0, 0.5),
      0 0 40px rgba(139, 0, 0, 0.3);
    letter-spacing: 3px;
    margin-bottom: 30px;
  }

  .skill {
    transition: transform 0.3s ease;
  }

  .skill:hover {
    transform: scale(1.1);
  }
</style>
