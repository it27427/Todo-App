const registerUser = async (req, res) => {
  const data = req.body;
  console.log(data);
  res.send('<h2>Register Succssfully Done!</h2>');
};

module.exports = {
  registerUser,
};
