import { Button, Stack } from '@mui/material';
import { path } from '../helpers/enums';
import { getCreds } from '../helpers/auth';

export default function WelcomeButtons() {
  return (
    <Stack spacing={1}>
      {getCreds() ? (
        <>
          <Button component='a' href={path.main} variant='contained'>
            Go to main
          </Button>
        </>
      ) : (
        <>
          <Button component='a' href={path.signIn} variant='contained'>
            Sign in
          </Button>
          <Button component='a' href={path.signUp} variant='contained'>
            Sign up
          </Button>
        </>
      )}
    </Stack>
  );
}
