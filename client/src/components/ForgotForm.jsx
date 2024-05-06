import { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const ForgotForm = () => {
  const [email, setEmail] = useState('');

  return (
    <form className='d-flex flex-column gap-3 w-100 bg-white px-4 py-5 rounded'>
      <InputField
        type='email'
        name='email'
        id='email'
        classes='form-control'
        placeholder='Enter Email Address'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className='mt-3'>
        <Button
          type='submit'
          classes='btn btn-primary text-uppercase fw-semibold w-100'
        >
          <small>Reset Password</small>
        </Button>
      </div>
    </form>
  );
};

export default ForgotForm;
