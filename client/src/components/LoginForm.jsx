import React from 'react';
import InputField from './InputField';

const LoginForm = () => {
  return (
    <form>
      <InputField
        type='email'
        name='email'
        id='email'
        classes='form-control'
        placeholder='Enter Email Address'
      />
    </form>
  );
};

export default LoginForm;
