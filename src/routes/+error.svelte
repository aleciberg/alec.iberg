<script lang="ts">
  import { page } from '$app/state';
</script>

<svelte:head>
  <title>{page.status} | Alec Iberg</title>
</svelte:head>

<div class="error-container">
  <h1>{page.status}</h1>
  <p>{page.status === 404 ? 'This page has been lost to the void.' : 'Something went wrong.'}</p>
  <a href="/">Return home</a>
</div>

<style>
  .error-container {
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
    padding: 40px 20px;
  }

  h1 {
    font-size: 96px;
    font-family: 'UnifrakturMaguntia', cursive;
    margin: 0;
    text-shadow:
      3px 3px 0px #000000,
      0 0 20px rgba(139, 0, 0, 0.5),
      0 0 40px rgba(139, 0, 0, 0.3);
  }

  p {
    font-size: 24px;
    color: #e0e0e0;
    margin: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
    padding: 8px 16px;
    border: 1px solid #8b0000;
    text-shadow: 0 0 8px rgba(139, 0, 0, 0.6);
  }
</style>
