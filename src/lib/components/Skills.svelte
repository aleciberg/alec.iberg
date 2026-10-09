<script lang="ts">
  import Skill from '$lib/components/Skill.svelte';
  import type { Skill as SkillData } from '$lib/types';

  const skills: SkillData[] = [
    { name: 'TypeScript', image: '/images/typescript.png' },
    { name: 'Node', image: '/images/node.png' },
    { name: 'Angular', image: '/images/angular.png' },
    { name: 'Postgres', image: '/images/postgres.png' },
    { name: 'GoLang', image: '/images/golang.png' },
    { name: 'React', image: '/images/react.png' },
    { name: 'AWS', image: '/images/aws.png' },
    { name: 'JavaScript', image: '/images/js.png' },
    { name: 'Svelte', image: '/images/svelte.png' },
    { name: 'Docker', image: '/images/docker.png' },
    { name: 'Git', image: '/images/gitbash.png' },
    { name: 'CI/CD', image: '/images/gitlab-ci.png' },
  ];
</script>

<div class="skills-holder">
  <h1>Skills</h1>
  <div class="skills-container">
    {#each skills as skill (skill.name)}
      <div class="skill">
        <Skill {skill} />
      </div>
    {/each}
  </div>
</div>

<style>
  .skills-holder {
    width: 100%;
    text-align: center;
    border-bottom: 4px solid #1a1a1a;
    border-top: 4px solid #1a1a1a;
    padding: 40px 0 100px;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(26, 26, 26, 0.2));
  }
  .skills-container {
    display: grid;
    grid-template-columns: repeat(3, auto);
    justify-content: center;
    gap: 10px;
    padding: 20px;
  }

  @media (min-width: 1080px) {
    .skills-container {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 20px;
    }
  }

  h1 {
    font-size: 64px;
    font-family: 'UnifrakturMaguntia', cursive;
    color: #ffffff;
    text-shadow:
      3px 3px 0px #000000,
      0 0 20px rgba(139, 0, 0, 0.5),
      0 0 40px rgba(139, 0, 0, 0.3);
    letter-spacing: 3px;
    margin-bottom: 30px;
  }

  .skill {
    transition: transform 0.3s ease;
  }

  .skill:hover {
    transform: scale(1.1);
  }
</style>
