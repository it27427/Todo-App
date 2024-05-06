import LoginForm from '@/components/LoginForm';
import ErrorLayout from '@/layouts/ErrorLayout';

import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <ErrorLayout>
      <div className='vh-100 bg-body-secondary d-flex align-items-center justify-content-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-5 mx-md-auto'>
              <div className='d-flex flex-column align-items-center justify-content-center gap-4 text-center'>
                <h2 className='fw-semibold text-uppercase'>Login</h2>
                <LoginForm />

                <div className='d-flex align-items-center justify-content-center gap-1 text-center'>
                  <p className='lead mb-0'>
                    <small>Don't have any account?</small>
                  </p>

                  <Link to='/register' className='nav-link'>
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorLayout>
  );
};

export default LoginPage;
