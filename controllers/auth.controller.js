const User = require('../models/User');

const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const duplicateUser = await User.findOne({ email });

    if (duplicateUser && duplicateUser.length > 0) {
      return res.status(400).send({
        message: 'User already registered with this email',
      });
    }

    let user = new User({ name, email, phone, password });
    const data = await user.save();

    console.log(data);

    res.status(201).send({
      message: 'User registered successfully done!',
    });
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

module.exports = {
  registerUser,
};
