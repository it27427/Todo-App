import { useState } from 'react';
import Button from './Button';
import InputField from './InputField';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  return (
    <form className='d-flex flex-column gap-3 w-100 bg-white px-4 py-5 rounded'>
      <InputField
        type='text'
        name='name'
        id='name'
        classes='form-control'
        placeholder='Enter Full Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

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
        type='tel'
        name='phone'
        id='phone'
        classes='form-control'
        placeholder='Enter Phone Number'
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
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

      <div className='mt-3'>
        <Button
          type='submit'
          classes='btn btn-primary text-uppercase fw-semibold w-100'
        >
          <small>Register</small>
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
