const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contactController = require('./controllers/contactController');

route.get('/', homeController.homePage);
route.post('/', homeController.sendPage);

route.get('/contact', contactController.contactPage);

module.exports = route;
