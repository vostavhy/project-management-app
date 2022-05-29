import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import mikalaiImg from '../static/styles/images/member1.png';
import uladzimirImg from '../static/styles/images/member2.jpg';

export default function WelcomeCreators() {
  const members = [
    {
      name: 'Mikalai',
      description:
        'Responsible for welcome page, header, footer and user operations(registration, delete, update)',
      img: mikalaiImg,
    },
    {
      name: 'Uladzimir',
      description: 'Responsible for operations with boards and tasks(registration, delete, update)',
      img: uladzimirImg,
    },
  ];

  return (
    <>
      {members.map((member, index) => (
        <Card sx={{ maxWidth: 345 }} key={index}>
          <CardMedia component='img' height='300' image={member.img} alt='avatar' />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {member.name}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {member.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
