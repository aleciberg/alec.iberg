<script>
  import Title from "../lib/components/Title.svelte";
  import Bio from "../lib/components/Bio.svelte";
  import Skills from "../lib/components/Skills.svelte";
  import Projects from "../lib/components/Projects.svelte";
  import Contact from "../lib/components/Contact.svelte";
</script>

<div class="base-page-container">
  <div class="top-level">
    <Title />
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
    width: 100vw;
    overflow: hidden;
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
    border: 10px soild blue;
  }
</style>
