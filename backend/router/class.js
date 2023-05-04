const express = require('express');
const app = express();
const classController = require('../controller/user');


// Add a new class
app.post('/add', classController.signinUser);

// Get a new class
app.get('/get/:classID', classController.signinUser);






// e.g: http://localhost:5005/api/class/add   [POST: send "name","teacherID","students","classCode" of user to this API]
// e.g: http://localhost:5005/api/class/get/:classID   [GET]
// e.g: http://localhost:5005/api/user/create   [POST: send "fullName","email","password","role" of user to this API]


module.exports = app;