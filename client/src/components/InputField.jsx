const InputField = ({ type, placeholder, name, id, classes }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className={classes}
      placeholder={placeholder}
      autoComplete='off'
    />
  );
};

export default InputField;
