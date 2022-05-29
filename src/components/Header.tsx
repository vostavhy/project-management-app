import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { getCreds } from '../helpers/auth';
import { path } from '../helpers/enums';

function Header() {
  const [isHeader, setIsHeader] = useState(false);

  useEffect(() => {
    getCreds() ? setIsHeader(true) : setIsHeader(false);
  }, []);

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
