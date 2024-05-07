const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <p className='mb-0 text-center fw-medium text-white small'>
        Copyright &copy; {currentYear}{' '}
        <span className='fst-italic fw-bold'>DailyNotes</span> all rights
        reserved.
      </p>
    </>
  );
};

export default Copyright;
