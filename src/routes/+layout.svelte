<script lang="ts">
  import type { Snippet } from 'svelte';
  import { page } from '$app/state';

  let { children }: { children: Snippet } = $props();

  const links = [
    { label: 'About', href: '/' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Resume', href: '/Resume' },
  ];

  const description =
    'Alec Iberg is a Portland-based full stack software engineer working with TypeScript, Node, Angular, Go, and AWS.';

  let menuOpen = $state(false);

  function isActive(href: string): boolean {
    if (href === '/') return page.url.pathname === '/' && !page.url.hash;
    if (href.startsWith('/#')) return page.url.hash === href.slice(1);
    return page.url.pathname === href;
  }
</script>

<svelte:head>
  <title>Alec Iberg | Full Stack Engineer</title>
  <meta name="description" content={description} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Alec Iberg | Full Stack Engineer" />
  <meta property="og:description" content={description} />
  <meta property="og:url" content="https://aleciberg.com" />
  <meta property="og:image" content="https://aleciberg.com/images/alec.png" />
  <meta name="twitter:card" content="summary" />
</svelte:head>

{#snippet navLinks()}
  {#each links as { label, href } (href)}
    <a {href} class="nav-link" class:active={isActive(href)} onclick={() => (menuOpen = false)}
      >{label}</a
    >
  {/each}
{/snippet}

<nav class="top-nav">
  <div class="nav-inner">
    <a href="/" class="nav-brand">Alec Iberg</a>
    <div class="nav-links">
      {@render navLinks()}
    </div>
    <button
      class="hamburger"
      onclick={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
      aria-expanded={menuOpen}>{menuOpen ? '✕' : '☰'}</button
    >
  </div>
  {#if menuOpen}
    <div class="nav-dropdown">
      {@render navLinks()}
    </div>
  {/if}
</nav>

<div class="page-content">
  {@render children()}
</div>

<style>
  :global(body) {
    background-color: #000000;
    margin: 0;
    min-height: 100vh;
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
    transition:
      color 0.2s ease,
      border-color 0.2s ease,
      text-shadow 0.2s ease;
  }

  .nav-link:hover,
  .nav-link.active {
    color: #ffffff;
    border-color: #8b0000;
    text-shadow: 0 0 8px rgba(139, 0, 0, 0.6);
  }

  .hamburger {
    display: none;
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

  @media (max-width: 599px) {
    .nav-links {
      display: none;
    }

    .hamburger {
      display: block;
    }
  }

  @media (min-width: 600px) {
    .nav-dropdown {
      display: none;
    }
  }

  .page-content {
    padding-top: 60px;
  }
</style>
