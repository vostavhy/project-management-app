import { Container, Grid } from '@mui/material';
import WelcomeButtons from '../components/WelcomeButtons';
import WelcomeCreators from '../components/WelcomeCreators';
import WelcomeDescription from '../components/WelcomeDescription';

function WelcomePage() {
  return (
    <Container sx={{ p: 7 }}>
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
    </Container>
  );
}

export default WelcomePage;
