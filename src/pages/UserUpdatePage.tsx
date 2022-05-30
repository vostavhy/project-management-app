import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material/';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Snack } from '../components/Snack';
import { getCreds, userDeleteRequest, userUpdateRequest } from '../helpers/auth';
import { path } from '../helpers/enums';
import { setHeaderState } from '../redux/header/headerSlice';
import ModalDelete from '../components/ModalDelete';

export default function UpdatePage() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [snackMsg, setSnackMsg] = useState('Success!');
  const dispatch = useDispatch();

  const creds =
    getCreds() === null
      ? {
          name: '',
          login: '',
        }
      : getCreds();

  console.log('creds: ', creds);

  // если учетных данных нет, открывать страницу авторизации
  useEffect(() => {
    if (!getCreds()) {
      navigate(`/${path.signIn}`);
    }
  }, []);

  const showMsg = (msg: string, isError: boolean) => {
    setIsError(isError);
    setSnackMsg(msg);
    setIsSnackOpen(true);
  };

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await userDeleteRequest();
      setIsLoading(false);
      showMsg('User was deleted!', false);
      setTimeout(() => {
        dispatch(setHeaderState(false));
        navigate(path.home);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
      showMsg(error as string, true);
    }
  };

  const userUpdate = async (data: { [x: string]: unknown }) => {
    setIsLoading(true);
    try {
      await userUpdateRequest(data);
      setIsLoading(false);
      showMsg('User data was updated!', false);
    } catch (error) {
      setIsLoading(false);
      showMsg(error as string, true);
    }
  };

  // modal window
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Container
        component='main'
        maxWidth='sm'
        sx={{
          borderRadius: '4px',
          boxShadow: ' 0 0 5px rgba(0,0,0,0.3)',
          p: 1,
        }}
      >
        <Box display='flex' flexDirection='column' alignItems='center'>
          <Typography component='h1' variant='h5'>
            Update
          </Typography>
          <Box component='form' onSubmit={handleSubmit(userUpdate)} mt={3}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label='Name'
                  {...register('name')}
                  defaultValue={creds.name}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Login'
                  {...register('login')}
                  defaultValue={creds.login}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label='Password'
                  {...register('password')}
                  type='password'
                  required
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid
              container
              sx={{ mt: 2, mb: 2, justifyContent: 'space-between', alignItems: 'center' }}
            >
              <Grid item>
                <Button
                  color='error'
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleClickOpenModal}
                >
                  Delete
                </Button>
              </Grid>
              {isLoading && (
                <Grid item>
                  <CircularProgress size={30} sx={{ mr: 2 }} />
                </Grid>
              )}
              <Grid item>
                <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                  Update
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Snack
          isOpen={isSnackOpen}
          handleClose={() => setIsSnackOpen(false)}
          msg={snackMsg}
          isError={isError}
        />
      </Container>
      <ModalDelete
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        handleAgreeModal={handleDelete}
      />
    </>
  );
}
