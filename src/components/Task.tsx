import { FC } from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material/';

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  files: {
    filename: string;
    fileSize: number;
  };
}

const taskStyles = {
  border: {
    borderRadius: '4px',
    boxShadow: ' 0 0 5px rgba(0,0,0,0.3)',
    p: 4,
    backgroundColor: '#eee',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  description: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  img: {
    maxWidth: '100px',
  },
};

const Task: FC<ITask> = ({ id, title, order, description, userId, boardId, columnId, files }) => {
  return (
    <>
      <Card sx={taskStyles.border}>
        <CardContent sx={{ padding: '0' }}>
          <Typography gutterBottom variant='h5'>
            {order}--{title}
          </Typography>
          <Typography gutterBottom variant='h5' sx={taskStyles.description}>
            {description}
          </Typography>
          <CardMedia
            sx={taskStyles.img}
            component='img'
            image='https://source.unsplash.com/random'
            title='Image title'
            alt='mage title'
          />
          {/* <img src={files.filename} alt='avatar' /> */}
        </CardContent>
        <CardActions>
          <Button size='small' color='secondary' variant='contained' sx={{ flexGrow: 1 }}>
            Dell Task
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Task;
