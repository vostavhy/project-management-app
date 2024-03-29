import { FC, useState } from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@mui/material/';

import { getAppiResource } from '../utils/network';
import { API_BOARDS, API_COLUMNS, API_TASKS, KANBAN_SERVICE_API } from '../helpers/api';
import ModalDelete from './ModalDelete';

export interface ITask {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  deleteTask: () => void;
  files: {
    filename: string;
    fileSize: number;
  };
}

const taskStyles = {
  border: {
    borderRadius: '4px',
    boxShadow: ' 0 0 5px rgba(0,0,0,0.3)',
    backgroundColor: '#eee',
  },
  description: {
    width: '95%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  img: {
    maxWidth: '100px',
    maxHeight: '100px',
  },
};

const Task: FC<ITask> = ({ id, title, order, description, boardId, columnId, deleteTask }) => {
  const deleteResource = async () => {
    await getAppiResource(
      `${KANBAN_SERVICE_API}${API_BOARDS}/${boardId}/${API_COLUMNS}/${columnId}/${API_TASKS}/${id}`,
      'DELETE'
    );
    deleteTask();
  };

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
      <Card sx={taskStyles.border}>
        <CardContent>
          <Typography gutterBottom variant='h6' sx={taskStyles.description}>
            {order}--{title}
          </Typography>
          <Typography gutterBottom variant='h6' sx={taskStyles.description}>
            {description}
          </Typography>
          <CardMedia
            sx={taskStyles.img}
            component='img'
            image='https://source.unsplash.com/random'
            title='Image title'
            alt='mage title'
          />
        </CardContent>
        <CardActions>
          <Button
            size='small'
            color='secondary'
            variant='contained'
            sx={{ flexGrow: 1 }}
            onClick={() => handleClickOpenModalDelete()}
          >
            Delete Task
          </Button>
        </CardActions>
      </Card>

      <ModalDelete
        openModal={openModalDelete}
        handleCloseModal={handleCloseModalDelete}
        handleAgreeModal={deleteResource}
      />
    </>
  );
};

export default Task;
