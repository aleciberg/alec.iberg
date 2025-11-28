<script>
  import { base } from "$app/paths";
  let links = ["About", "Skills", "Projects", "Resume", "Links"];

  export let currentPage = "About";

  let innerWidth = 901;
  let displayDropdown = false;

  // @ts-ignore
  function clickHandler(link) {
    currentPage = link.target.innerText;
    if (innerWidth < 600) {
      displayDropdown = !displayDropdown;
    }
  }

  const hamburgerClickHandler = () => {
    displayDropdown = !displayDropdown;
  };

  console.log(process.env.NODE_ENV);
</script>

<svelte:window bind:innerWidth />

<slot />

<style lang="postcss">
  :global(body) {
    background-color: #000000;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    font-family: 'MedievalSharp', cursive;
    color: #ffffff;
  }

  :global(*) {
    box-sizing: border-box;
  }
</style>
