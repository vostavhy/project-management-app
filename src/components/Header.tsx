import { AppBar, Button, Grid, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { API_BOARDS, KANBAN_SERVICE_API } from '../helpers/api';
import { getCreds } from '../helpers/auth';
import { path } from '../helpers/enums';
import { setHeaderState } from '../redux/header/headerSlice';
import { RootState } from '../redux/store';
import Modal from './Modal';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isHeader } = useSelector((state: RootState) => state.header);

  // необходимо при перезагрузке страницы обновлять стейт редьюсера
  useEffect(() => {
    if (getCreds()) {
      dispatch(setHeaderState(true));
    }
  });

  const signOut = () => {
    localStorage.clear();
    dispatch(setHeaderState(false));
    navigate(path.home);
  };

  // modal window
  const [openModal, setOpenModal] = useState(false);
  const handleClickOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          {isHeader && (
            <Grid container>
              <Grid item xs={12} md={10}>
                <Button color='inherit' onClick={() => handleClickOpenModal()}>
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
      <Modal
        openModal={openModal}
        handleCloseModal={handleCloseModal}
        title='Add Board'
        content='Please enter here title and description.'
        isDescr={false}
        isUserId={false}
        path={KANBAN_SERVICE_API + API_BOARDS}
      />
    </>
  );
}

export default Header;
