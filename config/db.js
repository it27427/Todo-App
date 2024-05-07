const mongoose = require('mongoose');
const config = require('./config');
const colors = require('colors');

const url = config.db.url;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log(`Database Connected Successfully!`.bgGreen);
  } catch (error) {
    console.error('Error connecting to database:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
