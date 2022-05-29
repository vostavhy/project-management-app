import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import { API_BOARDS, KANBAN_SERVICE_API } from '../helpers/api';
import { getAppiResource } from '../utils/network';
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
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getCreds } from '../helpers/auth';
import { setHeaderState } from '../redux/header/headerSlice';

export interface IBoard {
  id: string;
  title: string;
  description: string;
}

const mainStyles = {
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

function MainPage() {
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const [boards, setBoards] = useState<IBoard[]>([]);
  // const [isModal, setModal] = useState(false);
  // const onClose = () => setModal(false);

  const getResource = async () => {
    const res = await getAppiResource(KANBAN_SERVICE_API + API_BOARDS);
    setBoards(res);
  };

  useEffect(() => {
    getResource();
  });

  const dispatch = useDispatch();
  const isHeader = getCreds() ? true : false;
  dispatch(setHeaderState(isHeader));

  return (
    <>
      <Container maxWidth='sm'>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h3' color='initial'>
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
        <Container sx={mainStyles.border}>
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
                    <Typography gutterBottom variant='h5'>
                      {title}
                    </Typography>
                    <Typography gutterBottom variant='h5' sx={mainStyles.description}>
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='secondary' variant='contained' sx={{ flexGrow: 1 }}>
                      Dell Board
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>

      <Modal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        title='Add Board'
        content='Please enter here title and description.'
      />
    </>
  );
}

export default MainPage;
