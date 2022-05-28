import WelcomeButtons from '../components/WelcomeButtons';
import WelcomeCreators from '../components/WelcomeCreators';
import WelcomeDescription from '../components/WelcomeDescription';

function WelcomePage() {
  return (
    <>
      <WelcomeDescription />
      <WelcomeButtons />
      <WelcomeCreators />
    </>
  );
}

export default WelcomePage;
