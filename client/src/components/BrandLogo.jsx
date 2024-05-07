import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const BrandLogo = () => {
  return (
    <Link to='/' className='navbar-brand fw-bold text-uppercase me-0 py-0'>
      <span className='d-flex align-items-center gap-2'>
        <img src={logo} alt='BRAND-LOGO' className='img-fluid' />
        <small>DailyNotes</small>
      </span>
    </Link>
  );
};

export default BrandLogo;
