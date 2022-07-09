import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { CardContent, CardMedia } from '@mui/material';

const Skill = ({ skill }) => {
  const { name, image } = skill;
  console.log(skill);
  return (
    <Card
      id={name}
      sx={{ maxWidth: 345 }}
      style={{ border: '2px solid #6F1D1B' }}
    >
      <CardMedia component={'img'} image={image} height="1" />
      <CardContent>
        <Typography variant={'h5'}>{name}</Typography>
        <Typography
          variant="p"
          align="center"
          color="text.secondary"
          sx={{ mb: 1.5 }}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Skill;
