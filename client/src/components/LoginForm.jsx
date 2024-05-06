import { useState } from 'react';
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
    </form>
  );
};

export default LoginForm;
