<script lang="ts">
	export let skill: Record<string, any>;
</script>

<div class="skill-container">
	<img alt={skill.name} class="image" src={skill.image} />
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
