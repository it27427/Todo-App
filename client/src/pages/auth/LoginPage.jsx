import LoginForm from '@/components/LoginForm';
import ErrorLayout from '@/layouts/ErrorLayout';

const LoginPage = () => {
  return (
    <ErrorLayout>
      <LoginForm />
    </ErrorLayout>
  );
};

export default LoginPage;
