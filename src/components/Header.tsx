import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div className='wrapper-row'>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='signIn'>SignInPage</NavLink>
      <NavLink to='main'>MainPage</NavLink>
      <NavLink to='board'>BoardPage</NavLink>
    </div>
  );
}

export default Header;
