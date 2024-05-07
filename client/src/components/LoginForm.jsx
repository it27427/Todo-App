import { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from './Button';
import InputField from './InputField';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit done');
  };

  return (
    <form className='d-flex flex-column gap-3 w-100 bg-white px-4 py-5 rounded'>
      <InputField
        type='email'
        name='email'
        id='email'
        classes='form-control'
        placeholder='Enter Email Address'
        value={email}
        onChange={handleEmailChange}
      />

      <div className='d-flex flex-column gap-2'>
        <InputField
          type='password'
          name='password'
          id='password'
          classes='form-control'
          placeholder='Enter Password'
          value={password}
          onChange={handlePasswordChange}
        />

        <div className='d-flex justify-content-end'>
          <Link to='/forgot-password' className='nav-link text-dark'>
            Forgot Password?
          </Link>
        </div>
      </div>

      <div className='mt-3'>
        <Button
          type='submit'
          classes='btn btn-primary text-uppercase fw-semibold w-100'
          click={handleSubmit}
          // disabled={!email || !password}
        >
          <small>Login</small>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
