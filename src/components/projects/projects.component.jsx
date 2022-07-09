import ProjectItem from '../project-item/project-item.component';

import Grid from '@mui/material/Grid';

import './projects.styles.css';

const Projects = () => {
  const projectsToShow = [
    'CLI Crypto',
    'CRWN CLOTHING',
    'Movie Fight',
    'Weather App',
  ];

  return (
    <Grid container m={1} p={1} spacing={{ xs: 2, md: 3 }} columns={16}>
      {projectsToShow.map((project) => {
        return (
          <Grid item xs={8}>
            <ProjectItem title={project}></ProjectItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Projects;
