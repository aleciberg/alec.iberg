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
    width: 80%;
    margin: 40px auto;
    padding: 30px;
    background: linear-gradient(to bottom, rgba(26, 26, 26, 0.4), rgba(0, 0, 0, 0.4));
    border: 4px solid #1a1a1a;
    border-radius: 0;
    text-align: center;
    box-shadow: 
      inset 0 0 30px rgba(0, 0, 0, 0.6),
      0 0 40px rgba(0, 0, 0, 0.5),
      0 0 60px rgba(139, 0, 0, 0.2);
  }

  .showcase-title {
    font-size: 48px;
    font-family: 'UnifrakturMaguntia', cursive;
    color: #ffffff;
    text-shadow: 
      3px 3px 0px #000000,
      0 0 20px rgba(139, 0, 0, 0.5);
    letter-spacing: 3px;
    margin-bottom: 20px;
  }

  .showcase-image {
    width: 100%;
    max-width: 700px;
    border-radius: 0;
    margin-top: 20px;
    border: 3px solid #1a1a1a;
    box-shadow: 
      0 0 20px rgba(0, 0, 0, 0.8),
      0 0 40px rgba(139, 0, 0, 0.2);
    filter: brightness(0.85) contrast(1.1);
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .showcase-image:hover {
    transform: scale(1.02);
    filter: brightness(0.9) contrast(1.15);
    box-shadow: 
      0 0 30px rgba(0, 0, 0, 0.9),
      0 0 60px rgba(139, 0, 0, 0.4);
  }

  .showcase-description {
    font-size: 20px;
    font-family: 'MedievalSharp', cursive;
    color: #e0e0e0;
    margin-top: 20px;
    line-height: 1.6;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  }

  /* General Projects Holder */
  .skills-holder {
    width: 100vw;
    text-align: center;
    align-items: center;
    border-bottom: 4px solid #1a1a1a;
    border-top: 4px solid #1a1a1a;
    padding: 40px 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 0.2));
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

  /* Projects Container Styling */
  .projects-container, .projects-container-small {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    padding: 40px 20px;
  }

  /* Project Card Styling */
  .project-card {
    background: linear-gradient(to bottom, rgba(26, 26, 26, 0.5), rgba(0, 0, 0, 0.5));
    padding: 20px;
    border: 3px solid #1a1a1a;
    border-radius: 0;
    width: 250px;
    text-align: center;
    box-shadow: 
      inset 0 0 20px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(139, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-5px);
    border-color: #8b0000;
    box-shadow: 
      inset 0 0 30px rgba(0, 0, 0, 0.7),
      0 0 30px rgba(0, 0, 0, 0.7),
      0 0 50px rgba(139, 0, 0, 0.4);
  }

  .project-title {
    color: #ffffff;
    margin-bottom: 15px;
    font-size: 18px;
    font-family: 'MedievalSharp', cursive;
    font-weight: bold;
    text-shadow: 
      2px 2px 4px rgba(0, 0, 0, 0.9),
      0 0 10px rgba(139, 0, 0, 0.5);
  }

  .project-image {
    width: 100%;
    max-width: 220px;
    height: auto;
    border-radius: 0;
    margin-top: 10px;
    border: 2px solid #1a1a1a;
    filter: brightness(0.8) contrast(1.2);
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  .project-card:hover .project-image {
    filter: brightness(0.9) contrast(1.3);
    transform: scale(1.05);
  }

  /* Small Screen Adjustments */
  .projects-container-small {
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  @media (max-width: 768px) {
    .showcase-container {
      width: 95%;
      padding: 20px;
    }

    .showcase-title {
      font-size: 36px;
    }

    .projects-container {
      flex-direction: column; 
      align-items: center;    
    }

    .project-card {
      width: 90%;
      margin-bottom: 20px;
    }

    .project-image {
      height: auto; 
      max-width: 100%; 
    }

    h1 {
      font-size: 48px;
    }
  }
</style>
