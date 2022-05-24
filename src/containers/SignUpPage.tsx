import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material/';
import { FormEvent } from 'react';

export default function SignUp() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          Sign up
        </Typography>
        <Box component='form' onSubmit={handleSubmit} mt={3}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField name='name' label='Name' required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name='login' label='Login' required fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField name='password' label='Password' type='password' required fullWidth />
            </Grid>
          </Grid>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
