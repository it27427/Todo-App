const Button = ({ type, click, children, classes }) => {
  return (
    <button type={type} onClick={click} className={classes}>
      {children}
    </button>
  );
};

export default Button;
