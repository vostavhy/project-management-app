import { useDispatch } from 'react-redux';
import { getCreds } from '../helpers/auth';
import { setHeaderState } from '../redux/header/headerSlice';

function MainPage() {
  const dispatch = useDispatch();
  const isHeader = getCreds() ? true : false;
  dispatch(setHeaderState(isHeader));
  return <div>MainPage</div>;
}

export default MainPage;
