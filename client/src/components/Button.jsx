const Button = ({ type = 'button', click, children, classes, disabled }) => {
  return (
    <button type={type} onClick={click} className={classes} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
