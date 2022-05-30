import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import WelcomeButtons from '../components/WelcomeButtons';
import WelcomeCreators from '../components/WelcomeCreators';
import WelcomeDescription from '../components/WelcomeDescription';
import { getCreds } from '../helpers/auth';
import { setHeaderState } from '../redux/header/headerSlice';

function WelcomePage() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8}>
        <WelcomeDescription />
      </Grid>
      <Grid item xs={12} md={4}>
        <WelcomeButtons />
      </Grid>
      <Grid item xs={12} md={8}>
        <WelcomeCreators />
      </Grid>
    </Grid>
  );
}

export default WelcomePage;
