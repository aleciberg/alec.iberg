import ProjectItem from '../project-item/project-item.component';

import Grid from '@mui/material/Grid';

import './projects.styles.css';

const Projects = () => {
  const projectsToShow = [
    'CLI Crypto',
    'CRWN CLOTHING',
    'Movie Fight',
    'Timer',
    'Weather App',
  ];

  return (
    <Grid container m={1} p={1} spacing={{ xs: 2, md: 3 }} columns={16}>
      <Grid item xs={8}>
        <ProjectItem title={'CLI Crypto'}></ProjectItem>
      </Grid>
      <Grid item xs={8}>
        <ProjectItem title={'CRWN CLOTHING'}></ProjectItem>
      </Grid>
      <Grid item xs={8}>
        <ProjectItem title={'Movie Fight'}></ProjectItem>
      </Grid>
      <Grid item xs={8}>
        <ProjectItem title={'Weather App'}></ProjectItem>
      </Grid>
    </Grid>
  );
};

export default Projects;
