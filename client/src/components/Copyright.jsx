const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p className='mb-0 text-center fw-medium text-white small'>
        Copyright &copy; {currentYear} Todo app all rights reserved.
      </p>
    </>
  );
};

export default Copyright;
