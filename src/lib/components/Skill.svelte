<script>
  import { base } from "$app/paths";

  export let skill;
  export let large = false;
</script>

<div class={large ? "skill-container-large" : "skill-container-small"}>
  <img
    alt={skill.name}
    class={large ? "image-large" : "image-small"}
    src={`${base}${skill.image}`}
  />
  <span class="skill-label">{skill.name}</span>
</div>

<style>
  .skill-container-large {
    width: 100px;
    min-height: 110px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 8px 4px;
    border-radius: 0;
    overflow: visible;
    border: 2px solid #1a1a1a;
    background: rgba(0, 0, 0, 0.3);
    box-shadow:
      inset 0 0 10px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.3);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .skill-container-large:hover {
    border-color: #8b0000;
    box-shadow:
      inset 0 0 15px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(139, 0, 0, 0.4);
  }

  .skill-container-small {
    width: 110px;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 10px 4px;
    border-radius: 0;
    overflow: visible;
    border: 2px solid #1a1a1a;
    background: rgba(0, 0, 0, 0.3);
    box-shadow:
      inset 0 0 10px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.3);
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .skill-container-small:hover {
    border-color: #8b0000;
    box-shadow:
      inset 0 0 15px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(139, 0, 0, 0.4);
  }

  .image-large {
    height: 72px;
    width: 72px;
    filter: brightness(0.85) contrast(1.1);
    transition: filter 0.3s ease;
  }

  .skill-container-large:hover .image-large {
    filter: brightness(1) contrast(1.2);
  }

  .image-small {
    height: 80px;
    width: 80px;
    filter: brightness(0.85) contrast(1.1);
    transition: filter 0.3s ease;
  }

  .skill-container-small:hover .image-small {
    filter: brightness(1) contrast(1.2);
  }

  .skill-label {
    font-size: 10px;
    color: #999999;
    text-align: center;
    letter-spacing: 0.5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    transition: color 0.3s ease;
  }

  .skill-container-large:hover .skill-label,
  .skill-container-small:hover .skill-label {
    color: #cccccc;
  }
</style>
