<script>
  import { base } from "$app/paths";
  import Title from "../lib/components/Title.svelte";
  import Links from "../lib/components/Links.svelte";
  import Bio from "../lib/components/Bio.svelte";
  import Skills from "../lib/components/Skills.svelte";
  import Projects from "../lib/components/Projects.svelte";
  import Contact from "../lib/components/Contact.svelte";
</script>

<div class="base-page-container">
  <div class="top-level">
    <Title />
    <Links />
  </div>
  <div class="bio-container">
    <Bio />
  </div>
  <div class="skills-container">
    <Skills />
  </div>
  <Projects />
  <Contact />
</div>

<style>
  .base-page-container {
    border: 2px solid green;
    /* width: 100vw;
  overflow: hidden; */
    display: flex;
    flex-direction: column;
  }

  .top-level {
    display: flex;
    flex-direction: row;
  }

  .bio-container {
    width: 100%;
    margin-top: 60px;
  }

  .skills-container {
    
  }
</style>
