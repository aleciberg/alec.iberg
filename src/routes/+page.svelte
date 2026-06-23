<script>
  import Title from "../lib/components/Title.svelte";
  import Bio from "../lib/components/Bio.svelte";
  import Skills from "../lib/components/Skills.svelte";
  import Projects from "../lib/components/Projects.svelte";
  import Contact from "../lib/components/Contact.svelte";
</script>

<div class="base-page-container">
  <Title />
  <div class="bio-container">
    <Bio />
  </div>
  <div id="skills" class="skills-container">
    <Skills />
  </div>
  <div id="projects">
    <Projects />
  </div>
  <div class="video-container">
    <h2 class="video-title">Current Favorite Music</h2>
    <div class="video-wrapper">
      <iframe
        src="https://www.youtube.com/embed/O9WYceFbHw4?si=5n3pji-Tq9LOIqbQ"
        title="Black Metal Music Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        class="youtube-embed"
      ></iframe>
    </div>
  </div>
  <div id="contact">
    <Contact />
  </div>
</div>

<style>
  .base-page-container {
    width: 100vw;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    background-color: #000000;
    min-height: 100vh;
  }

  .bio-container {
    width: 100%;
    margin-top: 20px;
  }

  .skills-container {
    width: 100%;
  }

  #skills,
  #projects,
  #contact {
    scroll-margin-top: 60px;
  }

  .video-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 20px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(26, 26, 26, 0.3));
    border-top: 4px solid #1a1a1a;
    border-bottom: 4px solid #1a1a1a;
  }

  .video-title {
    font-size: 48px;
    font-family: 'UnifrakturMaguntia', cursive;
    color: #ffffff;
    text-shadow: 
      3px 3px 0px #000000,
      0 0 20px rgba(139, 0, 0, 0.5),
      0 0 40px rgba(139, 0, 0, 0.3);
    letter-spacing: 3px;
    margin-bottom: 30px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .video-title {
      font-size: 36px;
    }
  }

  .video-wrapper {
    width: 100%;
    max-width: 900px;
    aspect-ratio: 16 / 9;
    box-shadow:
      0 0 30px rgba(0, 0, 0, 0.8),
      0 0 60px rgba(139, 0, 0, 0.3);
    border: 5px solid #1a1a1a;
  }

  .youtube-embed {
    width: 100%;
    height: 100%;
    display: block;
    filter: brightness(0.85) contrast(1.1);
  }
</style>
