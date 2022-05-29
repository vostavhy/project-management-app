import { Button, Stack } from '@mui/material';
import { path } from '../helpers/enums';
import { getCreds } from '../helpers/auth';
import { Link } from 'react-router-dom';

export default function WelcomeButtons() {
  return (
    <Stack spacing={1}>
      {getCreds() ? (
        <>
          <Button component={Link} to={path.main} variant='contained'>
            Go to main
          </Button>
        </>
      ) : (
        <>
          <Button component={Link} to={path.signIn} variant='contained'>
            Sign in
          </Button>
          <Button component={Link} to={path.signUp} variant='contained'>
            Sign up
          </Button>
        </>
      )}
    </Stack>
  );
}
