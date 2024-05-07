import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';

const BrandLogo = () => {
  return (
    <Link to='/' className='navbar-brand fw-bold text-uppercase me-0 py-0'>
      <small className='d-flex align-items-center'>
        DailyN
        <img
          src={logo}
          alt='BRAND-LOGO'
          className='img-fluid'
          width={24}
          height={24}
        />
        tes
      </small>
    </Link>
  );
};

export default BrandLogo;
