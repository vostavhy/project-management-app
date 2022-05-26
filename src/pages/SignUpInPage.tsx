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

export interface SignProps {
  name: string;
  apiRequest: (data: { [x: string]: string }) => Promise<void>;
  isName: boolean;
}

export default function Sign(props: SignProps) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [snackMsg, setSnackMsg] = useState('Success!');

  const { name, apiRequest, isName } = props;

  const showMsg = (msg: string, isError: boolean) => {
    setIsError(isError);
    setSnackMsg(msg);
    setIsSnackOpen(true);
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
          {name}
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(async (data) => {
            setIsLoading(true);
            try {
              await apiRequest(data);
              setIsLoading(false);
              showMsg('Success', false);
              setTimeout(() => navigate('/main'), 1000);
            } catch (error) {
              setIsLoading(false);
              showMsg(error as string, true);
            }
          })}
          mt={3}
        >
          <Grid container spacing={2}>
            {isName && (
              <Grid item xs={12}>
                <TextField label='Name' {...register('name')} required fullWidth />
              </Grid>
            )}

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
          <Grid container justifyContent='flex-end' alignItems='center' sx={{ mt: 2, mb: 2 }}>
            {isLoading && (
              <Grid item>
                <CircularProgress size={30} sx={{ mr: 2 }} />
              </Grid>
            )}
            <Grid item>
              <Button type='submit' variant='contained'>
                {name}
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
