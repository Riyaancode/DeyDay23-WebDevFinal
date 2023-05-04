const express = require('express');
const app = express();
const classController = require('../controller/class');


// Add a new class
app.post('/add', classController.createNewClass);


// Add student to class
app.post('/add/student', classController.addStudentToClass);

// Get a new class
app.get('/get/:teacherid', classController.getTeacherClass);






// e.g: http://localhost:5005/api/class/add   [POST: send "name","teacherID","classCode"  to this API]
// e.g: http://localhost:5005/api/class/add/student   [POST: send "studentID","classCode" to this API]
// e.g: http://localhost:5005/api/class/get/:teacherid [GET]


module.exports = app;