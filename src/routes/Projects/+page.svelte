<script>
  let innerWidth;

  const projects = {
    'Noncompete Length': {
      name: 'noncompete',
      link: 'https://github.com/aleciberg/noncompete',
      image: '/images/noncompete.png',
    },
    // 'CLI Crypto': {
    //   name: 'clicrypto',
    //   link: 'https://github.com/aleciberg/CLI_crypto',
    //   image: '/images/clicrypto.gif',
    // },
    'CRWN CLOTHING': {
      name: 'Crwn Clothing',
      link: 'https://github.com/aleciberg',
      image: '/images/crwnclothing.png',
    },
    'Movie Fight': {
      name: 'Movie Fight',
      link: 'https://github.com/aleciberg/movieFight',
      image: '/images/moviefight.png',
    },
    'Weather App': {
      name: 'Weather App',
      link: 'https://github.com/aleciberg/AirQualityViewer',
      image: '/images/weatherApp.gif',
    },
  };
</script>

<svelte:window bind:innerWidth />

<div
  class={innerWidth > 1100 ? 'projects-container' : 'projects-container-small'}
>
  {#each Object.entries(projects) as [project, props]}
    <div class="project">
      <p>{project}</p>
      <a target="_blank" href={props.link}
        ><img class="image" src={props.image} /></a
      >
    </div>
  {/each}
</div>

<style>
  .projects-container {
    display: grid;
    gap: 12px;
    grid-template-columns: auto auto;
    overflow: scroll;
  }

  .projects-container-small {
    display: grid;
    gap: 12px;
    grid-template-columns: auto;
    overflow: scroll;
  }

  .image {
    height: 300px;
    width: 300px;
    border-radius: 14px;
  }
</style>
