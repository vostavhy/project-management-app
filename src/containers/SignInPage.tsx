import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material/';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export default function SignIn() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

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
          Sign in
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
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign in
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
