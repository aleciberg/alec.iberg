 <script>
  let innerWidth;

  const showcaseProject = {
      name: 'Cosmic Cargo Network',
      description: 'Cosmic Cargo Network is a mock company I am building to practice GoLang and more front end development. Cosmic Cargo Network is a galactic shipping organization that services 3 superclusters, 6 galaxies, and 50 planets. We provide various APIs from distance calculators to pricing quotes to availability statuses.',
      link: 'https://github.com/aleciberg/cosmiccargonetwork',
      image: '/images/cosmic_cargo_network.png'
  }
  
  const projects = {
    'Noncompete Length': {
      name: 'noncompete',
      link: 'https://github.com/aleciberg/noncompete',
      image: '/images/noncompete.png',
    },
    'CLI Crypto': {
      name: 'clicrypto',
      link: 'https://github.com/aleciberg/CLI_crypto',
      image: '/images/clicrypto.gif',
    },
    'CRWN CLOTHING': {
      name: 'Crwn Clothing',
      link: 'https://github.com/aleciberg',
      image: '/images/crwnclothing.png',
    },
    'Movie Fight': {
      name: 'Movie Fight',
      link: 'https://github.com/aleciberg/movieFight',
      image: '/images/moviefight.png',
    }
  };
</script>

<svelte:window bind:innerWidth />

<div class='skills-holder'>
  <h1>Projects</h1>

  <div class="showcase-container">
    <h2 class="showcase-title">{showcaseProject.name}</h2>
    <a target="_blank" href={showcaseProject.link}>
      <img class="showcase-image" src={showcaseProject.image} />
    </a>
    <p class="showcase-description">{showcaseProject.description}</p>
  </div>

  <div class={innerWidth < 1080 ? "projects-container-small" : "projects-container"}>
    {#each Object.entries(projects) as [project, props]}
      <div class="project-card">
        <p class="project-title">{project}</p>
        <a target="_blank" href={props.link}>
          <img class="project-image" src={props.image} />
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  /* Showcase Project Styling */
  .showcase-container {
    width: 60%;
    margin: 20px auto;
    padding: 20px;
    background-color: rgba(118, 171, 174, 0.1);
    border: 2px solid #FF1493;
    border-radius: 12px;
    text-align: center;
  }

  .showcase-title {
    font-size: 36px;
    color: #76abae;
  }

  .showcase-image {
    width: 100%;
    max-width: 600px;
    border-radius: 12px;
    margin-top: 10px;
  }

  .showcase-description {
    font-size: 18px;
    color: #76abae;
    margin-top: 15px;
  }

  /* General Projects Holder */
  .skills-holder {
    width: 100vw;
    text-align: center;
    align-items: center;
    border-bottom: 3px solid rgba(118, 171, 174, 0.5);
  }

  h1 {
    font-size: 48px;
    color: #76abae;
    margin-bottom: 20px;
  }

  /* Projects Container Styling */
  .projects-container, .projects-container-small {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 20px;
  }

  /* Project Card Styling */
  .project-card {
    background-color: rgba(118, 171, 174, 0.05);
    padding: 15px;
    border: 2px solid #FF1493;
    border-radius: 10px;
    width: 220px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .project-title {
    color: #76abae;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  .project-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
  }

  /* Small Screen Adjustments */
  .projects-container-small {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 768px) {
  .projects-container {
    flex-direction: column; 
    align-items: center;    
  }

  .project-card {
    width: 90%;
    margin-bottom: 15px;
  }

  .project-image {
    height: auto; 
    max-width: 100%; 
  }
}

</style>
