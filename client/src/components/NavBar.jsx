import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const linkClasses = ({ isActive }) =>
    isActive ? 'nav-link active text-uppercase' : 'nav-link text-uppercase';

  return (
    <nav className='navbar d-flex align-items-center justify-content-between'>
      <Link to='/' className='navbar-brand fw-bold text-uppercase'>
        Todo App
      </Link>

      <ul className='navbar-nav flex-row gap-4'>
        <li className='nav-item'>
          <NavLink to='/' className={linkClasses}>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className={linkClasses}>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
