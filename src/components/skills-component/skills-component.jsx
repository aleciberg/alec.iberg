import gitlab from './gitlab-ci.png';
import jest from './jest.png';
import node from './node.png';
import react from './React-icon.svg.png';
import redux from './Redux.png';
import typescript from './typescript.png';
import javascript from './js.png';
import gitbash from './gitbash.png';
import svelte from './svelte.png';
import golang from './golang.png';

import './skills.styles.css';

import Skill from '../skill-component/skill.component';
import Grid from '@mui/material/Grid';

const Skills = ({ isMobile }) => {
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
    { name: 'GitBash', image: gitbash },
  ];
  return (
    <Grid
      container
      sx={{ height: '20vh' }}
      m={1}
      p={1}
      spacing={{ xs: 2, md: 1 }}
      columns={4}
      style={{
        margin: isMobile ? '35px' : '',
        padding: isMobile ? '20px' : '',
      }}
    >
      {skills.map((skill) => {
        return (
          <Grid key={skill} item xs={4} md={2} lg={1}>
            <Skill key={skill} skill={skill}></Skill>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Skills;
