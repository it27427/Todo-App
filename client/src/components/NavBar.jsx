import { Link, NavLink } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const NavBar = () => {
  const linkClasses = ({ isActive }) =>
    isActive
      ? 'nav-link active text-uppercase py-0 fw-medium'
      : 'nav-link text-uppercase py-0';

  return (
    <nav className='navbar d-flex align-items-center justify-content-between'>
      <BrandLogo />

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
        <li className='nav-item'>
          <NavLink to='/todo' className={linkClasses}>
            <small>Todo</small>
          </NavLink>
        </li>
      </ul>

      <ul className='navbar-nav flex-row gap-2'>
        <li className='nav-item'>
          <Link to='/login' className='btn btn-outline-secondary'>
            <small>Login</small>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/register' className='btn btn-success'>
            <small>Register</small>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
