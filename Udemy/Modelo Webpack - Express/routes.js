const express = require('express');
const route = express.Router();
const indexController = require('./src/controllers/indexController');

route.get('/', indexController.indexPage);

module.exports = route;
