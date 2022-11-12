
import { NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="Header">
      <h1>shcollege</h1>
      <div>
        <NavLink to={'/loggin'}>Log In</NavLink>
        <NavLink to={'/sign_in'}>Sign In</NavLink>
      </div>
    </header>
  );
}

export default Header;
