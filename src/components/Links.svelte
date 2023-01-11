<script>
	import Typewriter from 'svelte-typewriter';
</script>

<div>
	<Typewriter mode="cascade" interval={100}>
		<h2 class="written-line">
			Check out my <a class="link" href="https://github.com/aleciberg" target="_blank">GitHub</a>
		</h2>
		<h2 class="written-line">
			Check out my <a class="link" href="https://linkedin.com/in/aleciberg" target="_blank"
				>LinkedIn</a
			>
		</h2>
		<h2 class="written-line">
			Email Me <a class="link" href="mailto: ibergalec@icloud.com" target="_blank">Here</a>
		</h2>
	</Typewriter>
</div>

<style>
	.written-line {
		color: #65946a;
		padding: 20px;
	}

	.link {
		color: #6f1d1b;
	}
</style>
