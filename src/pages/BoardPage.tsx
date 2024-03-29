import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';
import { Box } from '@mui/system';
import { Typography, Container, Grid, Button } from '@mui/material/';

import Board from '../components/Board';
import Modal from '../components/Modal';
import { API_BOARDS, API_COLUMNS, KANBAN_SERVICE_API } from '../helpers/api';
import { getAppiResource } from '../utils/network';

export interface IColumns {
  id: string;
  title: string;
  order: number;
}

interface IBoardId {
  boardId: string;
}

const mainStyles = {
  title: {
    display: 'flex',
    flexDirection: 'column',
  },
  wrapper: {
    display: 'flex',
    width: '90vw',
    borderRadius: '4px',
    position: 'relative',
    gap: '20px',
    margin: '0',
    pading: '0',
  },
};

function BoardPage() {
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [columns, setColumns] = useState<IColumns[]>([]);
  const PromiseboarId = useLocation();
  const state = PromiseboarId.state as IBoardId;
  const { boardId } = state;

  const getResource = async () => {
    const res = await getAppiResource(
      `${KANBAN_SERVICE_API}${API_BOARDS}/${boardId}/${API_COLUMNS}`,
      'GET'
    );
    setColumns(res);
  };

  useEffect(() => {
    getResource();
  }, [columns]);

  return (
    <>
      <Container>
        <Container sx={mainStyles.title}>
          <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography variant='h4' color='initial'>
              Columns
            </Typography>
            <Grid>
              <Button
                variant='contained'
                color='secondary'
                sx={{ mt: 1, mb: 1 }}
                component={RouterLink}
                to='/main'
              >
                Choose board
              </Button>
            </Grid>
            <Grid container>
              <Button
                variant='contained'
                color='primary'
                sx={{ mt: 1, mb: 2 }}
                onClick={() => handleClickOpenModal()}
              >
                Add Column
              </Button>
            </Grid>
          </Box>
        </Container>
        <Container sx={mainStyles.wrapper}>
          {columns.map(({ id, title, order }) => (
            <Board key={id} id={id} title={title} order={order} boardId={boardId} />
          ))}
        </Container>
      </Container>

      <Modal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        title='Add Column'
        content='Please enter here title'
        isDescr={true}
        isUserId={false}
        path={`${KANBAN_SERVICE_API}${API_BOARDS}/${boardId}/${API_COLUMNS}`}
      />
    </>
  );
}

export default BoardPage;
