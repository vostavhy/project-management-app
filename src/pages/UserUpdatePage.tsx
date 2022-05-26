import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material/';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { Snack } from '../components/Snack';
import { userDeleteRequest, userUpdateRequest } from '../helpers/auth';

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [snackMsg, setSnackMsg] = useState('Success!');

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
      navigate('/');
    } catch (error) {
      setIsLoading(false);
      showMsg(error as string, true);
    }
  };

  return (
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
        <Box
          component='form'
          onSubmit={handleSubmit(async (data) => {
            setIsLoading(true);
            try {
              await userUpdateRequest(data);
              setIsLoading(false);
              showMsg('User data was updated!', false);
            } catch (error) {
              setIsLoading(false);
              showMsg(error as string, true);
            }
          })}
          mt={3}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField label='Name' {...register('name')} required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label='Login' {...register('login')} required fullWidth />
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
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Button
                color='error'
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
                onClick={handleDelete}
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
  );
}
