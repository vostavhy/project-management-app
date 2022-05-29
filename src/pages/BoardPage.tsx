import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Board from '../components/Board';
import { API_BOARDS, API_COLUMNS, KANBAN_SERVICE_API } from '../helpers/api';
import { getAppiResource } from '../utils/network';
import { Box } from '@mui/system';
import { Typography, Container, Grid, Button } from '@mui/material/';
import { Link as RouterLink } from 'react-router-dom';

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
  border: {
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: '20px',
  },
};

function BoardPage() {
  const [columns, setColumns] = useState<IColumns[]>([]);
  const PromiseboarId = useLocation();
  const state = PromiseboarId.state as IBoardId;
  const { boardId } = state;

  const getResource = async () => {
    const res = await getAppiResource(
      KANBAN_SERVICE_API + API_BOARDS + '/' + boardId + '/' + API_COLUMNS
    );
    setColumns(res);
  };

  useEffect(() => {
    getResource();
  });

  return (
    <Container sx={{ width: '100%' }}>
      <Container sx={mainStyles.title}>
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography variant='h3' color='initial'>
            Columns
          </Typography>
          <Grid container sx={{ gap: '30px ' }}>
            <Button
              variant='contained'
              color='secondary'
              sx={{ mt: 3, mb: 6 }}
              component={RouterLink}
              to='/main'
            >
              Choose board
            </Button>
          </Grid>
        </Box>
      </Container>
      <Container sx={mainStyles.border}>
        <Grid container spacing={2} sx={mainStyles.wrapper}>
          {columns.map(({ id, title, order }) => (
            <Board key={id} id={id} title={title} order={order} boardId={boardId} />
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default BoardPage;
