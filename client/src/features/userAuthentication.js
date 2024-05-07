import axios from 'axios';

const SERVER_URL = 'http://localhost:3001/api';

const registerUser = (data) => {
  return axios.post(`${SERVER_URL}/register`, data);
};

const loginerUser = (data) => {
  return axios.post(`${SERVER_URL}/login`, data);
};

export default { registerUser, loginerUser };
