import alec4 from './alecmountain.JPG';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { CardContent, CardMedia } from '@mui/material';

import './about-me.styles.css';

const AboutMe = ({ isMobile }) => {
  return (
    <Card
      sx={{ margin: 2 }}
      style={{
        border: '1px solid black',
        width: isMobile ? '90vw' : '75vw',
        height: isMobile ? '80vh' : '95vh',
        marginTop: isMobile ? '60px' : '',
        overflow: 'auto',
      }}
    >
      <CardMedia
        component={'img'}
        image={alec4}
        alt={'picture of alec'}
        style={{ height: '35vh', paddingTop: '' }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          sx={{ mb: 1.5 }}
          component="div"
          align="center"
        >
          Hello, I am <span className={'outdoors'}>Alec Iberg</span> and I am a
          Full Stack Developer.
          <br></br>
          <br></br>I currently work at Array, as a Full Stack Developer,
          building FinTech tools. I currently work with{' '}
          <span className="target">
            JavaScript, TypeScript, Svelte, NodeJS, and GoLang{' '}
          </span>
          and very much enjoy this stack. I always find great satisfaction in
          seeing my work produce <span className="target">meaningful </span> and
          <span className="target"> measurable</span> results and I love being
          able to provide value to the FinTech space and improve access to
          credit for <span className="target">everyone.</span>{' '}
        </Typography>
        <Typography variant="h5" align="center" sx={{ mb: 1.5 }}>
          As for my personal life, I really enjoy the{' '}
          <span className="outdoors">outdoors</span>- you can usually find me
          camping, hiking, or backpacking on a weekend. I am fortunate enough to
          <span className="target"> live in Southern California</span> and be
          surrounded by some of our nation's best National Parks.{' '}
          <span className={'outdoors'}>Joshua Tree</span> is probably my
          favorite. Additionally, I am a huge College Football fan (GO BUCKS!),
          a big hockey fan, and I very much enjoy spending time with my dog,
          <span className={'outdoors'}> Juniper.</span> She is a 2 year old
          Border Collie with unlimited energy.
        </Typography>
        <button onClick={() => console.log(isMobile)}>CLICK HERE</button>
      </CardContent>
    </Card>
  );
};

export default AboutMe;
