<script>
  import { base } from "$app/paths";
  console.log("links");
  let links = ["About", "Skills", "Projects", "Resume", "Links"];

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

<div class="sidebar-container">
  {#each links as link}
    <a
      href={link === "About" ? `${base}/` : `${base}/${link}`}
      on:click={(link) => clickHandler(link)}>{link}</a
    >
  {/each}
</div>

<style>
    .sidebar-container {
    text-align: center;
    margin: auto;
    padding-top: 50px;
    color: red;
    height: 10vh;
    width: 100vw;
    overflow: scroll;
  }
</style>