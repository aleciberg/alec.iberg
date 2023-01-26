<script>
  import { base } from '$app/paths';
  let links = ['About', 'Skills', 'Projects', 'Resume', 'Links'];

  export let currentPage = 'About';

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

{#if innerWidth > 600}
  <div class="sidebar-container">
    {#each links as link}
      <a
        class={link === currentPage ? 'selected' : 'link'}
        href={link === 'About' ? `${base}/` : `${base}/${link}`}
        on:click={(link) => clickHandler(link)}>{link}</a
      >
    {/each}
  </div>
{:else}
  <div>
    <!-- <button class="button" on:click={hamburgerClickHandler}>||||</button> -->
    <button class="button-37" role="button" on:click={hamburgerClickHandler}
      >Menu</button
    >
  </div>
  {#if displayDropdown}
    <div class="dropdown-container">
      {#each links as link}
        <a
          class="dropdown"
          href={link === 'About' ? `${base}/` : `${base}/${link}`}
          on:click={(link) => clickHandler(link)}>{link}</a
        >
      {/each}
    </div>
  {/if}
{/if}
<!-- <div class="main-container">
  <slot />
</div> -->
<div class={innerWidth < 600 ? 'main-container-small' : 'main-container'}>
  <slot />
</div>

<style lang="postcss">
  :global(body) {
    background-image: url(/images/forest.svg);
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }

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

  .main-container-small {
    border-radius: 50px 50px 0 0;
    border: 3px solid #6f1d1b;
    border-bottom: 0px;
    height: 70vh;
    width: 95vw;
    position: fixed;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%);
    background-color: lightgrey;
    display: flex;
    justify-content: center;
    opacity: 85%;
  }

  .sidebar-container {
    text-align: center;
    margin: auto;
    padding-top: 50px;
    color: red;
    height: 10vh;
    width: 100vw;
    overflow: scroll;
  }

  .link {
    font-size: 30px;
    color: white;
    padding: 55px;
    margin: 5px;
  }

  .selected {
    font-size: 30px;
    color: #6f1d1b;
    padding: 55px;
    margin: 5px;
  }

  .dropdown-container {
    display: flex;
    flex-direction: column;
    height: auto;
    width: 200px;
    position: fixed;
    z-index: 2;
    border: 1px solid black;
    border-radius: 10px;
    opacity: 85%;
    background-color: lightgrey;
  }

  .dropdown {
    font-size: 20px;
    background-color: darkgrey;
    padding: 5px;
    text-decoration: none;
    color: #6f1d1b;
  }

  .button {
    height: 50px;
    width: 50px;
    border-radius: 10px;
    padding: 2px;
  }

  .button-37 {
    background-color: #13aa52;
    border: 1px solid #13aa52;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-family: 'Akzidenz Grotesk BQ Medium', -apple-system, BlinkMacSystemFont,
      sans-serif;
    font-size: 16px;
    font-weight: 400;
    outline: none;
    outline: 0;
    padding: 10px 25px;
    text-align: center;
    transform: translateY(0);
    transition: transform 150ms, box-shadow 150ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }

  .button-37:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0 3px 9px 0;
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    .button-37 {
      padding: 10px 30px;
    }
  }
</style>
