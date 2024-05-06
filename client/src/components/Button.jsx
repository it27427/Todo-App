const Button = ({ type, click, children }) => {
  return (
    <button type={type} onClick={click}>
      {children}
    </button>
  );
};

export default Button;
