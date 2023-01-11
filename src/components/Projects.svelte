<script lang="ts">
  import clicrypto from '../_assets/clicrypto.gif';
  import crwnclothing from '../_assets/crwnclothing.png';
  import moviefight from '../_assets/moviefight.png';
  import weatherApp from '../_assets/weatherApp.gif';

  let innerWidth: number;

  const projects = {
    'CLI Crypto': {
      name: 'clicrypto',
      link: 'https://github.com/aleciberg/CLI_crypto',
      image: clicrypto,
    },
    'CRWN CLOTHING': {
      name: 'Crwn Clothing',
      link: 'https://github.com/aleciberg',
      image: crwnclothing,
    },
    'Movie Fight': {
      name: 'Movie Fight',
      link: 'https://github.com/aleciberg/movieFight',
      image: moviefight,
    },
    'Weather App': {
      name: 'Weather App',
      link: 'https://github.com/aleciberg/AirQualityViewer',
      image: weatherApp,
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
