<script>
  import { base } from '$app/paths';
  import Title from '../lib/components/Title.svelte';
  import Links from '../lib/components/Links.svelte';
  import Bio from '../lib/components/Bio.svelte';
  import Skills from '../lib/components/Skills.svelte';
  import Projects from '../lib/components/Projects.svelte';
  import Contact from '../lib/components/Contact.svelte';
</script>

<div class="about-me-container">
  <Links />
  <Title />
  <Bio />
  <Skills />
  <Projects />
  <Contact />
</div>

<!-- <style>
  .target {
    color: #6f1d1b;
    font-weight: bold;
  }

  .outdoors {
    color: #57753f;
    font-weight: bold;
  }

  .about-me-container {
    /* height: 75vh; */
    width: 90%;
    margin-top: 10px;
    font-size: 20px;
    overflow: scroll;
    text-align: center;
  }

  .image {
    height: 200px;
    width: 200px;
    border-radius: 100px;
  }

  .image-container {
    text-align: center;
    margin-bottom: 20px;
  }
</style> -->
