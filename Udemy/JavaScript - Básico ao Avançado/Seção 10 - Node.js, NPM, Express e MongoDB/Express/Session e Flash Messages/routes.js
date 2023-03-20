const express = require('express');
const route = express.Router();
const indexController = require('./src/controllers/indexController');

route.get('/', indexController.indexPage);
route.post('/', indexController.postTreatment);

module.exports = route;
