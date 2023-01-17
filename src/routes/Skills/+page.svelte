<script>
	import Skill from '$lib/components/Skill.svelte';

	const skills = [
		{ name: 'TypeScript', image: '/images/typescript.png' },
		{ name: 'React', image: '/images/react.png' },
		{ name: 'Svelte', image: '/images/svelte.png' },
		{ name: 'JavaScript', image: '/images/js.png' },
		{ name: 'Redux', image: '/images/Redux.png' },
		{ name: 'Git', image: '/images/gitbash.png' },
		{ name: 'CI/CD', image: '/images/gitlab-ci.png' },
		{ name: 'Jest', image: '/images/jest.png' },
		{ name: 'GoLang', image: '/images/golang.png' },
		{ name: 'Node', image: '/images/node.png' }
	];
</script>

<div class="skills-container">
	{#each skills as skill}
		<div class="skill">
			<Skill {skill} />
		</div>
	{/each}
</div>

<style>
	.skills-container {
		display: grid;
		overflow: scroll;
		gap: 5px;
		grid-template-columns: auto auto auto;
	}

	.skill {
	}
</style>
