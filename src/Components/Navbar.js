import { Link, NavLink } from 'react-router-dom';

const NavBar = () => (
  <nav>
    <h2>Math Magicians</h2>
    <div className="navItemsContainer">
      <Link to="/" className="navItems">Home</Link>
      <NavLink to="/Calculator" className="navItems">Calculator</NavLink>
      <NavLink to="/Quotes" className="navItems">Quotes</NavLink>
    </div>
  </nav>
);

export default NavBar;
