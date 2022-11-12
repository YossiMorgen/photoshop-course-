
import { NavLink } from 'react-router-dom';
import './Aside.css';

function Aside() {
  return (
    <aside className="Aside">
        <NavLink to={'/home'} >Home</NavLink>
        <NavLink to={'/products'} >Our Products</NavLink>
    </aside>
  );
}

export default Aside;
