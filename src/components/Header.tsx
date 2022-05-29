import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
              <Button component={Link} to={path.home} color='inherit'>
                New board
              </Button>
            </Grid>
            <Grid item xs={12} md={2}>
              <Button component={Link} to={path.userUpdate} color='inherit'>
                Edit profile
              </Button>
              <Button component={Link} to='/' color='inherit'>
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
