<script>
	import gitlab from '../_assets/gitlab-ci.png';
	import jest from '../_assets/jest.png';
	import node from '../_assets/node.png';
	import react from '../_assets/react.png';
	import redux from '../_assets/redux.png';
	import typescript from '../_assets/typescript.png';
	import javascript from '../_assets/js.png';
	import gitbash from '../_assets/gitbash.png';
	import svelte from '../_assets/svelte.png';
	import golang from '../_assets/golang.png';

	import Skill from './Skill.svelte';

	const skills = [
		{ name: 'TypeScript', image: typescript },
		{ name: 'ReactJS', image: react },
		{ name: 'JavaScript', image: javascript },
		{ name: 'Svelte', image: svelte },
		{ name: 'NodeJS', image: node },
		{ name: 'Go', image: golang },
		{ name: 'Jest', image: jest },
		{ name: 'Redux', image: redux },
		{ name: 'CI/CD', image: gitlab },
		{ name: 'GitBash', image: gitbash }
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
