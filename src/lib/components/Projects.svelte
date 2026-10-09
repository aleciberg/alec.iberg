<script lang="ts">
  import type { Project } from '$lib/types';

  const showcaseProject: Project = {
    name: 'Cosmic Cargo Network',
    description:
      'An intergalactic freight quoting system. Pick an origin and destination across 3 superclusters, 9 galaxies, and 50 planets, describe your cargo, and get an itemized quote in credits that factors in distance, planetary tax rates, political fees, and cargo type. A playground for Go on the backend and modern React on the front.',
    tech: ['Go', 'Echo', 'GORM', 'PostgreSQL', 'Next.js', 'React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/aleciberg/cosmiccargonetwork',
    image: '/images/cosmic_cargo_network.png',
  };

  const projects: Project[] = [
    {
      name: 'Flights Overhead',
      description:
        'A Raspberry Pi desk display showing the aircraft currently flying over Portland. Pulls live data from the OpenSky Network, ranks flights by distance using the Haversine formula, and renders flight cards on a 7" touchscreen. Runs as a self-restarting systemd service.',
      tech: ['Python', 'Pygame', 'Raspberry Pi', 'OpenSky API'],
      link: 'https://github.com/aleciberg/flights-overhead',
    },
    {
      name: 'CLI Crypto',
      description:
        'A Node command-line tool: type "coin" from anywhere, enter a symbol like BTC or ETH, and get the latest quote from the CoinMarketCap API.',
      tech: ['Node', 'CoinMarketCap API'],
      link: 'https://github.com/aleciberg/CLI_crypto',
      image: '/images/clicrypto.gif',
    },
  ];
</script>

<div class="projects-holder">
  <h1>Projects</h1>

  <div class="showcase-container">
    <h2 class="showcase-title">{showcaseProject.name}</h2>
    <a target="_blank" href={showcaseProject.link}>
      <img
        class="showcase-image"
        src={showcaseProject.image}
        alt="{showcaseProject.name} screenshot"
      />
    </a>
    <p class="showcase-description">{showcaseProject.description}</p>
    <ul class="tech">
      {#each showcaseProject.tech as t (t)}<li>{t}</li>{/each}
    </ul>
  </div>

  <div class="projects-container">
    {#each projects as project (project.name)}
      <a class="project-card" target="_blank" href={project.link}>
        <h3 class="project-title">{project.name}</h3>
        {#if project.image}
          <img class="project-image" src={project.image} alt="{project.name} screenshot" />
        {/if}
        <p class="project-description">{project.description}</p>
        <ul class="tech">
          {#each project.tech as t (t)}<li>{t}</li>{/each}
        </ul>
      </a>
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
    transition:
      transform 0.3s ease,
      filter 0.3s ease;
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
  .projects-holder {
    width: 100%;
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
  .projects-container {
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
    width: 340px;
    text-align: center;
    color: inherit;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow:
      inset 0 0 20px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(139, 0, 0, 0.2);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease,
      border-color 0.3s ease;
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
    transition:
      filter 0.3s ease,
      transform 0.3s ease;
  }

  .project-card:hover .project-image {
    filter: brightness(0.9) contrast(1.3);
    transform: scale(1.05);
  }

  .project-description {
    font-size: 16px;
    color: #cccccc;
    line-height: 1.6;
    margin: 15px 0;
  }

  .tech {
    list-style: none;
    padding: 0;
    margin: 10px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }

  .tech li {
    font-size: 12px;
    letter-spacing: 1px;
    color: #aaaaaa;
    border: 1px solid #8b0000;
    padding: 3px 8px;
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
