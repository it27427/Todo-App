import { Link } from 'react-router-dom';

import ForgotForm from '@/components/ForgotForm';
import ErrorLayout from '@/layouts/ErrorLayout';

const ForgotPage = () => {
  return (
    <ErrorLayout>
      <div className='vh-100 bg-body-secondary d-flex align-items-center justify-content-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-lg-5 mx-md-auto'>
              <div className='d-flex flex-column align-items-center justify-content-center gap-4 text-center'>
                <div className='d-flex flex-column gap-2'>
                  <h2 className='fw-semibold text-uppercase'>
                    Forgot password
                  </h2>
                  <p className='text-secondary w-75 mx-auto'>
                    Please enter the email address you'd like your password
                    reset information sent to
                  </p>
                </div>

                <ForgotForm />

                <div className='d-flex align-items-center justify-content-center gap-1 text-center'>
                  <p className='lead mb-0'>
                    <small>Password remembered?</small>
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

export default ForgotPage;
