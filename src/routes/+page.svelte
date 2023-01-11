<script lang="ts">
	import Sidebar from '../components/Sidebar.svelte';
	import MainContainer from '../components/MainContainer.svelte';

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
		/* background-color: #65946a; */
		background: rgb(123, 136, 129);
		background: linear-gradient(
			191deg,
			rgba(123, 136, 129, 1) 0%,
			rgba(101, 148, 106, 1) 48%,
			rgba(42, 68, 45, 1) 100%
		);
		height: 100vh;
		width: 100vw;
	}

	body {
		background-color: #65946a;
		overflow: hidden;
	}

	html,
	body {
		margin: 0;
		height: 100%;
		overflow: hidden;
	}
</style>
