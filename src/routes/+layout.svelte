<script>
	import { base } from '$app/paths';
	let links = ['About', 'Skills', 'Projects', 'Resume', 'Links'];

	export let currentPage = 'About';

	let innerWidth = 901;
	let displayDropdown = false;

	// @ts-ignore
	function clickHandler(link) {
		currentPage = link.target.innerText;
	}

	const hamburgerClickHandler = () => {
		displayDropdown = !displayDropdown;
	};

	console.log(process.env.NODE_ENV);
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 900}
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
		<button class="button" on:click={hamburgerClickHandler}>||||</button>
	</div>
	{#if displayDropdown}
		<div class="dropdown-container">
			{#each links as link}
				<span class="dropdown" on:click={(link) => clickHandler(link)}>{link}</span>
			{/each}
		</div>
	{/if}
{/if}
<div class="main-container">
	<slot />
</div>

<style lang="postcss">
	:global(body) {
		background-image: url(/images/forest.svg);
		background-size: cover;
		height: 100vh;
		width: 100vw;
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
	}

	.dropdown {
		font-size: 20px;
		background-color: darkgrey;
		padding: 5px;
	}

	.button {
		height: 50px;
		width: 50px;
		border-radius: 10px;
		padding: 2px;
	}
</style>
