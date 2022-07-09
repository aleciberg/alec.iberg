import gitlab from './gitlab-ci.png';
import jest from './jest.png';
import node from './node.png';
import react from './React-icon.svg.png';
import redux from './Redux.png';
import typescript from './typescript.png';
import javascript from './js.png';
import gitbash from './gitbash.png';

import './skills.styles.css';

import Skill from '../skill-component/skill.component';
import Grid from '@mui/material/Grid';

const Skills = () => {
  const skills = [
    { name: 'TypeScript', image: typescript },
    { name: 'ReactJS', image: react },
    { name: 'JavaScript', image: javascript },
    { name: 'NodeJS', image: node },
    { name: 'Jest', image: jest },
    { name: 'Redux', image: redux },
    { name: 'CI/CD', image: gitlab },
    { name: 'GitBash', image: gitbash },
  ];
  return (
    <Grid container m={1} p={1} spacing={{ xs: 2, md: 3 }} columns={16}>
      {skills.map((skill) => {
        return (
          <Grid item xs={4}>
            <Skill skill={skill}></Skill>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Skills;
