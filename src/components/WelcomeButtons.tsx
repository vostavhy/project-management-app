import { Button, Stack } from '@mui/material';
import { path } from '../helpers/enums';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

export default function WelcomeButtons() {
  const { isHeader } = useSelector((state: RootState) => state.header);

  return (
    <Stack spacing={1}>
      {isHeader ? (
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
