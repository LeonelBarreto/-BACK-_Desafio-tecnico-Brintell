const express = require('express');
const { listStudents, registerStudent, updateStudent, deleteStudent } = require('./controllers/students');

const routes = express();

routes.get('/dashboard', listStudents);
routes.post('/dashboard', registerStudent);
routes.put('/dashboard/:id', updateStudent);
routes.delete('/dashboard/:id', deleteStudent);

module.exports = routes;