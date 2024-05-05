import NotFound from '@/components/NotFound';
import ErrorLayout from '@/layouts/ErrorLayout';

const ErrorPage = () => {
  return (
    <ErrorLayout>
      <NotFound />
    </ErrorLayout>
  );
};

export default ErrorPage;
