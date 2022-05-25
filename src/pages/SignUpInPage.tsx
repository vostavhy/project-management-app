import { Container, Box, Typography, Grid, TextField, Button } from '@mui/material/';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export interface SignProps {
  name: string;
  apiRequest: (data: { [x: string]: string }) => void;
  isName: boolean;
}

export default function Sign(props: SignProps) {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const { name, apiRequest, isName } = props;

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
          onSubmit={handleSubmit((data) => {
            apiRequest(data);
            //reset();
            //navigate('/main');
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
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }}>
                {name}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
