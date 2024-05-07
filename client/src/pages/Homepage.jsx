import RootLayout from '@/layouts/RootLayout';
import welcome from '../assets/images/welcome.svg';

const Homepage = () => {
  return (
    <RootLayout>
      <div className='vh-100 d-flex align-items-center justify-content-center'>
        <div className='container'>
          <div className='row g-4 align-items-center'>
            <div className='col-md-6'>
              <h1>
                Schedule your daily tasks with{' '}
                <span className='text-primary'>DailyNotes</span>
              </h1>
            </div>

            <div className='col-md-6'>
              <figure className='d-flex align-items-center justify-content-center'>
                <img
                  src={welcome}
                  alt='WELCOME-THUMBNAIL'
                  className='img-fluid'
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Homepage;
