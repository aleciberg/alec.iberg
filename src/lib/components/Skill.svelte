<script>
	import { base } from '$app/paths';

	export let skill;
</script>

<div class="skill-container">
	<img alt={skill.name} class="image" src={`${base}${skill.image}`} />
</div>

<style>
	.skill-container {
		height: 200px;
		width: 200px;
		justify-content: center;
		margin-top: 10px;
		border-radius: 14px;
		overflow: hidden;
	}

	.image {
		height: 200px;
		width: 200px;
	}
</style>
