<script>
  let innerWidth;

  const projects = {
    "CLI Crypto": {
      name: "clicrypto",
      link: "https://github.com/aleciberg/CLI_crypto",
      image: "/images/clicrypto.gif",
    },
    "CRWN CLOTHING": {
      name: "Crwn Clothing",
      link: "https://github.com/aleciberg",
      image: "/images/crwnclothing.png",
    },
    "Movie Fight": {
      name: "Movie Fight",
      link: "https://github.com/aleciberg/movieFight",
      image: "/images/moviefight.png",
    },
    "Weather App": {
      name: "Weather App",
      link: "https://github.com/aleciberg/AirQualityViewer",
      image: "/images/weatherApp.gif",
    },
  };
</script>

<svelte:window bind:innerWidth />

<div class="skills-holder">
  <h1>Projects</h1>
  <div
    class={innerWidth < 1080 ? "skills-container-small" : "skills-container"}
  >
    {#each Object.entries(projects) as [project, props]}
      <div class="skill">
        <p class={"project-title"}>{project}</p>
        <a target="_blank" href={props.link}>
          <img class="image" src={props.image} />
        </a>
      </div>
    {/each}
  </div>
  <br />
  <br />
  <br />
  <br />
</div>

<style>
  .image {
    height: 300px;
    width: 300px;
    border-radius: 14px;
  }

  .skills-holder {
    width: 100vw;
    height: 10%;
    margin: auto;
    text-align: center;
    align-items: center;
    border-bottom: 3px solid rgba(118, 171, 174, 0.5);
  }
  .skills-container {
    display: flex;
    overflow: scroll;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  .skills-container-small {
    /* display: grid;
    overflow: scroll;
    gap: 5px;
    grid-template-columns: auto auto; */
  }

  .project-title {
    color: #76abae;
  }

  h1 {
    font-size: 48px;
    color: #76abae;
  }
</style>
