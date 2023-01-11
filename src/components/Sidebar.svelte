<script lang="ts">
	let links = ['About Me', 'Skills', 'Projects', 'Resume', 'Links'];

	export let currentPage = 'About Me';

	let innerWidth: number;
	let displayDropdown = false;

	// @ts-ignore
	function clickHandler(link) {
		currentPage = link.target.innerText;
	}

	const hamburgerClickHandler = () => {
		displayDropdown = !displayDropdown;
	};
</script>

<svelte:window bind:innerWidth />

{#if innerWidth > 1100}
	<div class="sidebar-container">
		{#each links as link}
			<span
				class={link === currentPage ? 'selected' : 'link'}
				on:click={(link) => clickHandler(link)}>{link}</span
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

<style lang="postcss">
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
