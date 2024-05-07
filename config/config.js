const dotenv = require('dotenv');
dotenv.config();

const dev = {
  app: {
    port: process.env.PORT || 3001,
  },
  db: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/todo',
  },
};

module.exports = dev;
