const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.jessicaRoute);
routes.get('/elyse', lesson1Controller.elyseRoute);

module.exports = routes;