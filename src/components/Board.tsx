import { FC, useEffect, useState } from 'react';
import { API_BOARDS, API_COLUMNS, API_TASKS, KANBAN_SERVICE_API } from '../helpers/api';
import { getAppiResource } from '../utils/network';
import Task, { ITask } from './Task';
import { Box } from '@mui/system';
import { Typography, Container, Grid, Button } from '@mui/material/';

export interface IBoard {
  id: string;
  title: string;
  order: number;
  boardId: string;
}

const boardStyles = {
  border: {
    borderRadius: '4px',
    boxShadow: ' 0 0 5px rgba(0,0,0,0.3)',
    p: 1,
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
};

const Board: FC<IBoard> = ({ id, title, order, boardId }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const getResource = async () => {
    const res = await getAppiResource(
      KANBAN_SERVICE_API +
        API_BOARDS +
        '/' +
        boardId +
        '/' +
        API_COLUMNS +
        '/' +
        id +
        '/' +
        API_TASKS
    );
    setTasks(res);
  };

  useEffect(() => {
    getResource();
  });

  return (
    <>
      <Container component='main'>
        <Box display='flex' alignItems='center'>
          <Typography variant='h3' color='initial'>
            {order} -- {title}
          </Typography>
          <Button variant='contained' size='large' color='secondary' sx={{ mt: 3, mb: 6, ml: 6 }}>
            Dell Column
          </Button>
        </Box>
        <Grid container sx={{ gap: '30px ' }}>
          <Button variant='contained' sx={{ mt: 3, mb: 6 }}>
            Add Task
          </Button>
        </Grid>
      </Container>
      <Container sx={boardStyles.border}>
        <Grid container spacing={2} sx={boardStyles.wrapper}>
          {tasks.map((props) => (
            <Task key={props.id} {...props} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Board;
