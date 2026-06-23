<script>
  import { page } from "$app/stores";

  const links = [
    { label: "About",    href: "/"         },
    { label: "Skills",   href: "/#skills"  },
    { label: "Projects", href: "/#projects"},
    { label: "Contact",  href: "/#contact" },
    { label: "Resume",   href: "/Resume"   },
    { label: "Links",    href: "/Links"    },
  ];

  let innerWidth = 901;
  let menuOpen = false;
</script>

<svelte:window bind:innerWidth />

<nav class="top-nav">
  <div class="nav-inner">
    <a href="/" class="nav-brand">Alec Iberg</a>
    {#if innerWidth >= 600}
      <div class="nav-links">
        {#each links as { label, href }}
          {@const isActive =
            href === "/"
              ? $page.url.pathname === "/" && !$page.url.hash
              : href.startsWith("/#")
                ? $page.url.hash === href.slice(1)
                : $page.url.pathname === href}
          <a
            {href}
            class="nav-link"
            class:active={isActive}
            on:click={() => (menuOpen = false)}
          >{label}</a>
        {/each}
      </div>
    {:else}
      <button
        class="hamburger"
        on:click={() => (menuOpen = !menuOpen)}
        aria-label="Toggle menu"
      >{menuOpen ? "✕" : "☰"}</button>
    {/if}
  </div>
  {#if innerWidth < 600 && menuOpen}
    <div class="nav-dropdown">
      {#each links as { label, href }}
        {@const isActive =
          href === "/"
            ? $page.url.pathname === "/" && !$page.url.hash
            : href.startsWith("/#")
              ? $page.url.hash === href.slice(1)
              : $page.url.pathname === href}
        <a
          {href}
          class="nav-link"
          class:active={isActive}
          on:click={() => (menuOpen = false)}
        >{label}</a>
      {/each}
    </div>
  {/if}
</nav>

<div class="page-content">
  <slot />
</div>

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

  :global(html) {
    scroll-behavior: smooth;
  }

  .top-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.95);
    border-bottom: 2px solid #8b0000;
    backdrop-filter: blur(4px);
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 60px;
  }

  .nav-brand {
    font-family: 'UnifrakturMaguntia', cursive;
    font-size: 22px;
    color: #ffffff;
    text-decoration: none;
    text-shadow: 0 0 10px rgba(139, 0, 0, 0.5);
    letter-spacing: 2px;
    flex-shrink: 0;
  }

  .nav-links {
    display: flex;
    gap: 4px;
    align-items: center;
  }

  .nav-link {
    color: #aaaaaa;
    text-decoration: none;
    font-size: 13px;
    font-family: 'MedievalSharp', cursive;
    letter-spacing: 1px;
    padding: 6px 10px;
    border: 1px solid transparent;
    transition: color 0.2s ease, border-color 0.2s ease, text-shadow 0.2s ease;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #ffffff;
    border-color: #8b0000;
    text-shadow: 0 0 8px rgba(139, 0, 0, 0.6);
  }

  .hamburger {
    background: none;
    border: 1px solid #8b0000;
    color: #ffffff;
    font-size: 18px;
    padding: 6px 14px;
    cursor: pointer;
    font-family: inherit;
    line-height: 1;
  }

  .nav-dropdown {
    display: flex;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.98);
    border-top: 1px solid #1a1a1a;
  }

  .nav-dropdown .nav-link {
    padding: 12px 24px;
    border: none;
    border-bottom: 1px solid #1a1a1a;
  }

  .page-content {
    padding-top: 60px;
  }
</style>
