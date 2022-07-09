import React from 'react';

import weatherApp from './weatherApp.gif';
import crypto from './clicrypto.gif';
import crwn from './crwnclothing.png';
import movieFight from './moviefight.png';

import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { CardActions, CardContent, CardMedia } from '@mui/material';

const ProjectItem = ({ title }) => {
  const projects = [
    {
      title: 'CLI Crypto',
      image: crypto,
      description:
        'A Command Line Interface to query Cryptocurency Prices and History',
      link: 'https://github.com/aleciberg/CLI_crypto',
    },
    {
      title: 'Weather App',
      image: weatherApp,
      description:
        'A simple web tool for querying air quality by city and state',
      link: 'https://github.com/aleciberg/AirQualityViewer',
    },
    {
      title: 'CRWN CLOTHING',
      image: crwn,
      description: 'An Ecommerce Website built alongside a Udemy course',
      link: '',
    },
    {
      title: 'Movie Fight',
      image: movieFight,
      description: 'A Movie Comparison Tool',
      link: 'https://github.com/aleciberg/movieFight',
    },
    {
      title: 'Timer',
      image: '',
      description: 'A Simple Styled Timer',
      link: 'https://github.com/aleciberg/timer',
    },
  ];

  const currentProject = projects.find((project) => project.title === title);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component={'img'}
        height="140"
        image={currentProject.image}
        alt={'project text'}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ mb: 1.5 }}
          component="div"
          align="center"
        >
          {currentProject.title}
        </Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 1.5 }}
        >
          {currentProject.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant={'contained'}
          href={currentProject.link}
          target={'_blank'}
          sx={{ backgroundColor: '#3E505B', }}
        >
          GitHub
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectItem;
