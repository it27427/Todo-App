const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const config = require('../config/config');

const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    const duplicateUser = await User.find({ email });

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

const privateKey = config.secret.key;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        message: 'Authentication Failed!',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(404).send({
        message: 'Wrong Password!',
      });
    }

    let token = jwt.sign({ userId: user?._id }, privateKey, {
      expiresIn: '1h',
    });

    const data = {
      userId: user?._id,
      userName: user?.name,
      userEmail: user?.email,
      token,
    };

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

module.exports = {
  registerUser,
  loginUser,
};
