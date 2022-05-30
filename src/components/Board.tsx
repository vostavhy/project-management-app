import { FC, useEffect, useState } from 'react';
import { API_BOARDS, API_COLUMNS, API_TASKS, KANBAN_SERVICE_API } from '../helpers/api';
import { getAppiResource } from '../utils/network';
import Task, { ITask } from './Task';
import { Box } from '@mui/system';
import { Typography, Container, Grid, Button } from '@mui/material/';
import Modal from './Modal';

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
    gap: '20px',
  },
  description: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
};

const Board: FC<IBoard> = ({ id, title, order, boardId }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
        API_TASKS,
      'GET'
    );
    setTasks(res);
  };

  const dellResource = async () => {
    await getAppiResource(
      KANBAN_SERVICE_API + API_BOARDS + '/' + boardId + '/' + API_COLUMNS + '/' + id,
      'DELETE'
    );
  };

  const delTask = () => {
    getResource();
  };

  useEffect(() => {
    getResource();
  }, [openModal]);

  return (
    <>
      <Container sx={boardStyles.border}>
        <Container>
          <Box display='flex' alignItems='center'>
            <Typography variant='h5' color='initial'>
              {order} -- {title}
            </Typography>
            <Button
              variant='contained'
              size='large'
              color='secondary'
              sx={{ mt: 3, mb: 6, ml: 6 }}
              onClick={() => dellResource()}
            >
              Dell Column
            </Button>
          </Box>
          <Grid container sx={{ gap: '30px ' }}>
            <Button
              variant='contained'
              sx={{ mt: 3, mb: 6 }}
              onClick={() => handleClickOpenModal()}
            >
              Add Task
            </Button>
          </Grid>
        </Container>
        <Container>
          <Grid container spacing={2} sx={boardStyles.wrapper}>
            {tasks.map((props) => (
              <Task key={props.id} {...props} delTask={delTask} />
            ))}
          </Grid>
        </Container>
      </Container>

      <Modal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        title='Add Task'
        content='Please enter here title and description.'
        isDescr={false}
        isUserId={true}
        path={
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
        }
      />
    </>
  );
};

export default Board;
