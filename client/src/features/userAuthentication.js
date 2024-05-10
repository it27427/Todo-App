import axios from 'axios';

const SERVER_URL = 'http://localhost:3001/api';

const registerUser = async (data) => {
  return await axios.post(`${SERVER_URL}/register`, data);
};

const loginUser = async (data) => {
  return await axios.post(`${SERVER_URL}/login`, data);
};

const AuthFeatures = { registerUser, loginUser };

export default AuthFeatures;
