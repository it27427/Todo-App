const mongoose = require('mongoose');
const config = require('./config');

const url = config.db.url;

mongoose.connect();
