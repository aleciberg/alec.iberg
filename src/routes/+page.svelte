<script lang="ts">
  import Sidebar from '../components/Sidebar.svelte';
  import MainContainer from '../components/MainContainer.svelte';

  import forest from '../_assets/forest.svg';

  export let currentPage = 'About Me';
</script>

<div class="container">
  <Sidebar bind:currentPage />
  <MainContainer page={currentPage} />
</div>

<style>
  .container {
    position: relative;
    justify-content: center;
    background-image: url(../_assets/forest.svg);
    background-size: cover;
    height: 100vh;
    width: 100vw;
  }
</style>
