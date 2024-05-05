import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'nav-link active text-uppercase py-0 fw-medium'
      : 'nav-link text-uppercase py-0';

  return (
    <nav className='navbar d-flex align-items-center justify-content-between'>
      <Link to='/' className='navbar-brand fw-bold text-uppercase me-0 py-0'>
        <small>Todo App</small>
      </Link>

      <ul className='navbar-nav flex-row gap-4'>
        <li className='nav-item'>
          <NavLink to='/' className={linkClasses}>
            <small>Home</small>
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/about' className={linkClasses}>
            <small>About</small>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
