const express = require('express');
const app = express();
const lesson1Controller = require('./controllers/lesson1');

app.get('/', lesson1Controller.jessicaRoute);

app.get('/elyse', lesson1Controller.elyseRoute);

const port = 3000;

app.listen(process.env.port || port);
console.log('Web Server is listening at port '+ (process.env.port || port));