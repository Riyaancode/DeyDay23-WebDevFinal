const express = require('express');
const app = express();
const userController = require('../controller/user');


// signin a new user
app.post('/signin', userController.signinUser);

// signin a new user
app.get('/signin', userController.signinUser);

// signup a new user
app.post('/create', userController.createNewUser);




// e.g: http://localhost:5005/api/user/signin   [POST: send "email","password" of user to this API]
// e.g: http://localhost:5005/api/user/signin   [GET]
// e.g: http://localhost:5005/api/user/create   [POST: send "fullName","email","password","role" of user to this API]


module.exports = app;