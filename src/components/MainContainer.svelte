<script lang="ts">
  import AboutMe from './AboutMe.svelte';
  import Skills from './Skills.svelte';
  import Projects from './Projects.svelte';
  import Resume from './Resume.svelte';
  import Links from './Links.svelte';

  export let page = 'About Me';
</script>

<div class="main-container">
  <!-- want to use switch when npm package updates -->
  {#if page === 'About Me'}
    <AboutMe />
  {:else if page === 'Skills'}
    <Skills />
  {:else if page === 'Projects'}
    <Projects />
  {:else if page === 'Resume'}
    <Resume />
  {:else if page === 'Links'}
    <Links />
  {/if}
</div>

<style lang="postcss">
  .main-container {
    border-radius: 50px 50px 0 0;
    border: 3px solid #6f1d1b;
    border-bottom: 0px;
    height: 80vh;
    width: 60vw;
    position: fixed;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%);
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    opacity: 85%;
  }
</style>
