<script lang="ts">
  import type { Skill } from '$lib/types';

  let { skill }: { skill: Skill } = $props();
</script>

<div class="skill-container">
  <img alt={skill.name} class="image" src={skill.image} />
  <span class="skill-label">{skill.name}</span>
</div>

<style>
  .skill-container {
    width: 110px;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding: 10px 4px;
    border: 2px solid #1a1a1a;
    background: rgba(0, 0, 0, 0.3);
    box-shadow:
      inset 0 0 10px rgba(0, 0, 0, 0.5),
      0 0 10px rgba(0, 0, 0, 0.3);
    transition:
      border-color 0.3s ease,
      box-shadow 0.3s ease;
  }

  .skill-container:hover {
    border-color: #8b0000;
    box-shadow:
      inset 0 0 15px rgba(0, 0, 0, 0.6),
      0 0 20px rgba(0, 0, 0, 0.5),
      0 0 30px rgba(139, 0, 0, 0.4);
  }

  .image {
    height: 80px;
    width: 80px;
    filter: brightness(0.85) contrast(1.1);
    transition: filter 0.3s ease;
  }

  .skill-container:hover .image {
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

  .skill-container:hover .skill-label {
    color: #cccccc;
  }

  @media (min-width: 1080px) {
    .skill-container {
      width: 100px;
      min-height: 110px;
      padding: 8px 4px;
    }

    .image {
      height: 72px;
      width: 72px;
    }
  }
</style>
