import ProjectItem from '../project-item/project-item.component';

import Grid from '@mui/material/Grid';

import './projects.styles.css';

const Projects = ({ isMobile }) => {
  const projectsToShow = [
    'CLI Crypto',
    'CRWN CLOTHING',
    'Movie Fight',
    'Weather App',
  ];

  return (
    <Grid
      container
      m={1}
      p={1}
      spacing={{ xs: 1, md: 2 }}
      columns={16}
      style={{
        margin: isMobile ? '35px' : '',
        padding: isMobile ? '20px' : '',
      }}
    >
      {projectsToShow.map((project) => {
        return (
          <Grid item xs={16} md={8} lg={8}>
            <ProjectItem title={project}></ProjectItem>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Projects;
