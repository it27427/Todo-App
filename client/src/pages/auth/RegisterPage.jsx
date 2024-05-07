import { Link } from 'react-router-dom';

import RegisterForm from '@/components/RegisterForm';
import ErrorLayout from '@/layouts/ErrorLayout';

const RegisterPage = () => {
  return (
    <ErrorLayout>
      <div className='vh-100 bg-body-secondary d-flex align-items-center justify-content-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-5 mx-md-auto'>
              <div className='d-flex flex-column align-items-center justify-content-center gap-3 text-center'>
                <hgroup className='d-flex flex-column align-items-center justify-content-center gap-2 text-center'>
                  <h2 className='display-4'>✍️</h2>
                  <h4 className='fw-semibold text-uppercase'>Register</h4>
                </hgroup>
                <RegisterForm />

                <div className='d-flex align-items-center justify-content-center gap-1 text-center'>
                  <p className='lead mb-0'>
                    <small>Already have an account?</small>
                  </p>

                  <Link to='/login' className='nav-link'>
                    Login
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

export default RegisterPage;
