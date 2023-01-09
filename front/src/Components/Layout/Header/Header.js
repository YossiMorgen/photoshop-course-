import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Services/useAuth';
import img from '../../../Assets/Images/schoolege_30.jpg'
import man from '../../../Assets/Images/man.png'
import './Header.css';
import AuthContext from '../../Context/AuthContext/AuthContext';

function Header() {
  const {auth} = useContext(AuthContext);
  const {logoutUser} = useAuth();
  return (
    <header className="Header" style={{backgroundImage: `url(${img})`}}>
      <Link to={'/home'}>
      <h1>schcollege</h1>
      </Link>
      
      {
        auth?.data  && 
        <div className='registered'>
          <button onClick={logoutUser}>Logout</button>
          <Link to={'/userarea'}><img src={man} alt='user_area'/></Link>
        </div>
      }

      {
        !auth?.data &&
        <div className='auth'>
          <NavLink to={'/loggin'}>Log In</NavLink>
          <NavLink to={'/sign_in'}>Sign In</NavLink>
        </div>
      }
    </header>
  );
}

export default Header;
