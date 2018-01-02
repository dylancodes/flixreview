const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const morgan = require('morgan');
const chalk = require('chalk');

const db = require('./db/models/db.js');
const apiRoutes = require('./api/routes/router.js');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api', apiRoutes);

app.listen(PORT, (err) => {
  if(err) console.log(err);
  console.log("Server Magic Happening on Port: " + PORT);
})
