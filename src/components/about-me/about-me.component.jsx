import alec from './alec.jpeg';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { CardContent, CardMedia } from '@mui/material';

import './about-me.styles.css';

const AboutMe = () => {
  return (
    <Card sx={{ margin: 2 }} style={{ border: '2px solid #6F1D1B' }}>
      <CardMedia
        component={'img'}
        image={alec}
        alt={'picture of alec'}
        style={{ height: '45vh', paddingTop: '' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ mb: 1.5 }}
          component="div"
          align="center"
        >
          I am currently employed at Olive, working on the Olive Platform
          application. Our stack includes{' '}
          <span className="target">TypeScript, React, NodeJS, and GoLang </span>
          and I am able to work in these everyday. I find great satisfaction in
          seeing my work produce <span className="target">meaningful </span> and
          <span className="target"> measurable</span> results in the HealthCare
          space, a space I am very passionate about improving for everyone.{' '}
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 1.5 }}>
          As for my personal life, I really enjoy the{' '}
          <span className="outdoors">outdoors</span>- you can usually find me
          camping, hiking, or backpacking on a weekend. I am fortunate enough to
          <span className="target"> live in Southern California</span> and be
          surrounded by some of our nation's best National Parks. Joshua Tree is
          probably my favorite. Additionally, I am a huge College Football fan
          (GO BUCKS!), a big hockey fan, and I very much enjoy spending time
          with my dog, Juniper. She is a 2 year old Border Collie with unlimited
          energy.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
