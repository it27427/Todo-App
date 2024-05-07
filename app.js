const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// CONNECTING-DATABASE
connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// IMPORT-ROUTES
const homeRouter = require('./routes/home.route');

app.use(homeRouter);

app.use((req, res, next) => {
  const notFound = '<h1>Page Not Found</h1>';
  res.status(404).send(notFound);
  res.end();
});

app.use((err, req, res, next) => {
  const serverError = '<h1>Internal Server Error!</h1>';
  res.status(500).send(serverError);
  res.end();
});

module.exports = app;
