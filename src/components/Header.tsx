import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getCreds } from '../helpers/auth';
import { path } from '../helpers/enums';
import { setHeaderState } from '../redux/header/headerSlice';
import { RootState } from '../redux/store';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (getCreds()) {
    dispatch(setHeaderState(true));
  }

  const { isHeader } = useSelector((state: RootState) => state.header);

  const signOut = () => {
    localStorage.clear();
    dispatch(setHeaderState(false));
    navigate(path.home);
  };

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
              <Button color='inherit' onClick={signOut}>
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
