const express = require('express');
const { listStudents, registerStudent } = require('./controllers/students');

const routes = express();

routes.get('/dashboard', listStudents);
routes.post('/dashboard', registerStudent);

module.exports = routes;