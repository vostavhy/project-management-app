import { FC, useEffect, useState } from 'react';
import { Typography, Container, Grid, Button } from '@mui/material/';
import { Box } from '@mui/system';

import { API_BOARDS, API_COLUMNS, API_TASKS, KANBAN_SERVICE_API } from '../helpers/api';
import { getAppiResource } from '../utils/network';
import Task, { ITask } from './Task';
import Modal from './Modal';
import ModalDelete from './ModalDelete';

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
  },
  wrapper: {
    display: 'flex',
    width: '500px',
    flexDirection: 'column',
    gap: '10px',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    maxHeight: '55vh',
    overflowY: 'scroll',
    borderRadius: '4px',
    boxShadow: ' 0 0 5px rgba(0,0,0,0.3)',
  },
  description: {
    width: '95%',
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
      `${KANBAN_SERVICE_API}${API_BOARDS}/${boardId}/${API_COLUMNS}/${id}/${API_TASKS}`,
      'GET'
    );
    setTasks(res);
  };

  const deleteResource = async () => {
    await getAppiResource(
      `${KANBAN_SERVICE_API}${API_BOARDS}/${boardId}/${API_COLUMNS}/${id}`,
      'DELETE'
    );
  };

  const deleteTask = () => {
    getResource();
  };

  useEffect(() => {
    getResource();
  }, [openModal]);

  // modal window
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const handleClickOpenModalDelete = () => {
    setOpenModalDelete(true);
  };
  const handleCloseModalDelete = () => {
    setOpenModalDelete(false);
  };

  return (
    <>
      <Container sx={boardStyles.wrapper}>
        <Grid>
          <Box alignItems='center'>
            <Button
              variant='contained'
              size='small'
              color='secondary'
              onClick={() => handleClickOpenModalDelete()}
            >
              Delete Column
            </Button>
            <Typography variant='h6' color='initial' sx={boardStyles.description}>
              {order} -- {title}
            </Typography>
          </Box>
          <Grid container sx={{ gap: '20px ' }}>
            <Button
              variant='contained'
              sx={{ mt: 1, mb: 1 }}
              onClick={() => handleClickOpenModal()}
            >
              Add Task
            </Button>
          </Grid>
        </Grid>
        <Container>
          <Container>
            {tasks.map((props) => (
              <Task key={props.id} {...props} deleteTask={deleteTask} />
            ))}
          </Container>
        </Container>
      </Container>

      <Modal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        title='Add Task'
        content='Please enter here title and description.'
        isDescr={false}
        isUserId={true}
        path={`${KANBAN_SERVICE_API}${API_BOARDS}/${boardId}/${API_COLUMNS}/${id}/${API_TASKS}`}
      />

      <ModalDelete
        openModal={openModalDelete}
        handleCloseModal={handleCloseModalDelete}
        handleAgreeModal={deleteResource}
      />
    </>
  );
};

export default Board;
