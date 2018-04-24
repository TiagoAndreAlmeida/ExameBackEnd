// ./app.js
'user strict';

const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const index = require('./routes/index');

const router = express.Router();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false}));

app.use('/', index);

module.exports = app;