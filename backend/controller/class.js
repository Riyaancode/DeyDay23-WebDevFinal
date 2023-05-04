const Class = require("../models/class");

// Function for generating unique project key
const generateClassCode = () => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let key = "";
  for (let i = 0; i < 5; i++) {
    key += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return key;
};

// Add a new class
const createNewClass = async (req, res) => {
  const myClass = await new Class({
    name: req.body.name,
    teacherID: req.body.teacherID,
    classCode: generateClassCode(),
  });
  myClass
    .save()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

// Add Student to a new Class
const addStudentToClass = async (req, res) => {
  try {
    const { studentID, classCode } = req.body;
    const myClass = await Class.findOne({ classCode: classCode });
    if (!myClass) {
      return res.status(404).json({ message: "No Class Found" });
    }
    myClass.students.push({ user: studentID });
    await myClass.save();
    return res.status(200).json({ message: "Student Add to Class" });
  } catch (err) {
    res.status(500).send("Something went wrong");
  }
};

// Get teacher class data

const getTeacherClass = async (req, res) => {
  const myTeacherClasses = await Class.find({
    teacherID: req.params.teacherid,
  }).populate("students.user");
  if (!myTeacherClasses) {
    return res
      .status(404)
      .json({ message: "No classes exist for specified teacher" });
  }
  return res.send(myTeacherClasses);
};

module.exports = { createNewClass, addStudentToClass, getTeacherClass };
