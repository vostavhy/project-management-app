import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material/';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { userDelete } from '../helpers/auth';

export default function SignUp() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const handleDelete = () => {
    userDelete();
    console.log('User deleted');
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
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
            navigate('/main');
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
            <Grid item>
              <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                Update
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
