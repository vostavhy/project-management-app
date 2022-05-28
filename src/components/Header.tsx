import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { path } from '../helpers/enums';

function Header() {
  return (
    //<div className='wrapper-row'>
    //  <NavLink to={path.home}>Home</NavLink>
    //  <NavLink to={path.signUp}>SignUpPage</NavLink>
    //  <NavLink to={path.signIn}>SignInPage</NavLink>
    //  <NavLink to={path.userUpdate}>UserUpdate</NavLink>
    //  <NavLink to={path.main}>MainPage</NavLink>
    //  <NavLink to={path.board}>BoardPage</NavLink>
    //</div>
    <AppBar position='static'>
      <Toolbar>
        <Typography
          component='a'
          href='/'
          variant='button'
          sx={{
            flexGrow: 1,
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          New board
        </Typography>
        <Button component='a' href={path.userUpdate} color='inherit'>
          Edit profile
        </Button>
        <Button component='a' href='/' color='inherit'>
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
