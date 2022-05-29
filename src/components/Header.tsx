import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { path } from '../helpers/enums';
import { RootState } from '../redux/store';

function Header() {
  const { isHeader } = useSelector((state: RootState) => state.header);

  return (
    <AppBar position='static'>
      <Toolbar>
        {isHeader && (
          <Grid container>
            <Grid item xs={12} md={10}>
              <Button component='a' href={path.home} color='inherit'>
                New board
              </Button>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button component='a' href={path.userUpdate} color='inherit'>
                Edit profile
              </Button>
              <Button component='a' href='/' color='inherit'>
                Sign Out
              </Button>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
