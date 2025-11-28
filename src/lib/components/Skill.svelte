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
    align-items: center;
    border-radius: 0;
    overflow: visible;
    border: 2px solid #1a1a1a;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 
      inset 0 0 10px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .skill-container-large:hover {
    transform: scale(1.1);
    border-color: #8b0000;
    box-shadow: 
      inset 0 0 15px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(139, 0, 0, 0.4);
  }

  .skill-container-small {
    height: 125px;
    width: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    border-radius: 0;
    overflow: visible;
    border: 2px solid #1a1a1a;
    background: rgba(0, 0, 0, 0.3);
    box-shadow: 
      inset 0 0 10px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .skill-container-small:hover {
    transform: scale(1.1);
    border-color: #8b0000;
    box-shadow: 
      inset 0 0 15px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(139, 0, 0, 0.4);
  }

  .image-large {
    height: 80px;
    width: 80px;
    filter: brightness(0.8) contrast(1.2);
    transition: filter 0.3s ease;
  }

  .skill-container-large:hover .image-large {
    filter: brightness(0.9) contrast(1.3);
  }

  .image-small {
    height: 100px;
    width: 100px;
    filter: brightness(0.8) contrast(1.2);
    transition: filter 0.3s ease;
  }

  .skill-container-small:hover .image-small {
    filter: brightness(0.9) contrast(1.3);
  }
</style>
