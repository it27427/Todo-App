import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import InputField from './InputField';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='d-flex flex-column gap-3'>
      <InputField
        type='email'
        name='email'
        id='email'
        classes='form-control'
        placeholder='Enter Email Address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        type='password'
        name='password'
        id='password'
        classes='form-control'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <div className='my-4'>
        <Button
          type='submit'
          classes='btn btn-primary text-uppercase fw-semibold'
        >
          <small>Login</small>
        </Button>
      </div>

      <div className='d-flex align-items-center justify-content-center gap-1 text-center'>
        <p className='lead mb-0'>
          <small>Don't have any account?</small>
        </p>

        <Link to='/register' className='nav-link'>
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
