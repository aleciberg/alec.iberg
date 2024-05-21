<script>
  import { base } from "$app/paths";

  export let skill;

  let innerWidth;

  $: active_image_class = innerWidth > 1080 ? "image-large" : "image-small";
  $: active_container_class =
    innerWidth > 1080 ? "skill-container-large" : "skill-container-small";
</script>

<svelte:window bind:innerWidth />

<div class={active_container_class}>
  <img
    alt={skill.name}
    class={active_image_class}
    src={`${base}${skill.image}`}
  />
</div>

<style>
  .skill-container-large {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    /* margin-top: 10px; */
    border-radius: 14px;
    overflow: hidden;
  }
  .skill-container-small {
    height: 125px;
    width: 125px;
    display: flex;
    justify-content: center;
    margin-top: 5px;
    border-radius: 14px;
    overflow: hidden;
  }

  .image-large {
    height: 100px;
    width: 100px;
  }

  .image-small {
    height: 100px;
    width: 100px;
  }
</style>
