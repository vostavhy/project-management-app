import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setHeaderState } from '../redux/header/headerSlice';
import { Box } from '@mui/system';
import {
  Typography,
  Container,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@mui/material/';

import Modal from '../components/Modal';
import { API_BOARDS, KANBAN_SERVICE_API } from '../helpers/api';
import { getCreds } from '../helpers/auth';
import { getAppiResource } from '../utils/network';

export interface IBoard {
  id: string;
  title: string;
  description: string;
}

const mainStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    maxHeight: '55vh',
    overflowY: 'scroll',
    borderRadius: '4px',
    boxShadow: ' 0 0 5px rgba(0,0,0,0.3)',
    p: 1,
    position: 'relative',
  },
  description: {
    width: '95%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
};

function MainPage() {
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [boards, setBoards] = useState<IBoard[]>([]);

  const getResource = async () => {
    const res = await getAppiResource(`${KANBAN_SERVICE_API}${API_BOARDS}`, 'GET');
    setBoards(res);
  };

  const deleteResource = async (id: string) => {
    await getAppiResource(`${KANBAN_SERVICE_API}${API_BOARDS}/${id}`, 'DELETE');
    getResource();
  };

  useEffect(() => {
    getResource();
  }, [openModal]);

  const dispatch = useDispatch();
  const isHeader = getCreds() ? true : false;
  dispatch(setHeaderState(isHeader));

  return (
    <>
      <Container>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h4' color='initial'>
            Boards
          </Typography>
          <Grid container>
            <Button
              variant='contained'
              color='primary'
              sx={{ mt: 3, mb: 6 }}
              onClick={() => handleClickOpenModal()}
            >
              Add Board
            </Button>
          </Grid>
        </Box>
        <Grid container spacing={2} sx={mainStyles.wrapper}>
          {boards.map(({ id, title, description }) => (
            <Grid item key={id}>
              <Card sx={{ backgroundColor: '#eee' }}>
                <CardContent
                  component={RouterLink}
                  to='/board'
                  state={{ boardId: id }}
                  sx={{ padding: '0' }}
                >
                  <Typography gutterBottom variant='h6' sx={mainStyles.description}>
                    {title}
                  </Typography>
                  <Typography gutterBottom variant='h6' sx={mainStyles.description}>
                    {description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size='small'
                    color='secondary'
                    variant='contained'
                    sx={{ flexGrow: 1 }}
                    onClick={() => deleteResource(id)}
                  >
                    Delete Board
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        title='Add Board'
        content='Please enter here title and description.'
        isDescr={false}
        isUserId={false}
        path={`${KANBAN_SERVICE_API}${API_BOARDS}`}
      />
    </>
  );
}

export default MainPage;
