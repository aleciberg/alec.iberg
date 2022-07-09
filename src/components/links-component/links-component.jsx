import { CardContent } from '@mui/material';
import { Typewriter } from 'react-simple-typewriter';

import Card from '@mui/material/Card';

const Links = () => {
  const handleDone = () => {
    console.log('done');
  };

  return (
    <>
      <Card sx={{ marginTop: 16 }} style={{ border: '2px solid #6F1D1B' }}>
        <CardContent sx={{ marginTop: 0 }}>
          <h1
            style={{
              paddingTop: '2rem',
              margin: 'auto 0',
              fontWeight: 'normal',
            }}
          >
            Checkout my{' '}
            <a
              href="https://github.com/aleciberg"
              target={'_blank'}
              style={{ color: '#65946a', fontWeight: 'bold' }}
            >
              <Typewriter
                words={['Github']}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                delaySpeed={1000}
              />
            </a>
          </h1>
          <h1
            style={{
              paddingTop: '5rem',
              margin: 'auto 0',
              fontWeight: 'normal',
            }}
          >
            Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/aleciberg/"
              target={'_blank'}
              style={{ color: '#65946a', fontWeight: 'bold' }}
            >
              <Typewriter
                words={['LinkedIn']}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                delaySpeed={1000}
              />
            </a>
          </h1>
          <h1
            style={{
              paddingTop: '5rem',
              margin: 'auto 0',
              fontWeight: 'normal',
            }}
          >
            Drop me an Email{' '}
            <a
              href="mailto: ibergalec@icloud.com"
              style={{ color: '#65946a', fontWeight: 'bold' }}
            >
              <Typewriter
                words={['Here']}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                delaySpeed={1000}
              />
            </a>
          </h1>
        </CardContent>
      </Card>
    </>
  );
};

export default Links;
