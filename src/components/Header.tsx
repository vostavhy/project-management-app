import { NavLink } from 'react-router-dom';
import { path } from '../helpers/enums';

function Header() {
  return (
    <div className='wrapper-row'>
      <NavLink to={path.home}>Home</NavLink>
      <NavLink to={path.signUp}>SignUpPage</NavLink>
      <NavLink to={path.signIn}>SignInPage</NavLink>
      <NavLink to={path.userUpdate}>UserUpdate</NavLink>
      <NavLink to={path.main}>MainPage</NavLink>
      <NavLink to={path.board}>BoardPage</NavLink>
    </div>
  );
}

export default Header;
