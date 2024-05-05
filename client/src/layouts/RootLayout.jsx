import Footer from '@/components/Footer';
import Header from '@/components/Header';

const RootLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='min-vh-100'>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
