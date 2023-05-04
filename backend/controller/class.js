const Class = require("../model/class");

// Add a new class
const createNewClass = async (req, res) => {
  const myClass = await new Class({
    name: req.body.name,
    teacherID: req.body.teacherID,
    classCode: "21212",
  });
  myClass
    .save()
    .then((result) => res.status(200).send(result))
    .catch((err) => res.status(500).send(err));
};

// Add Student to a new Class

module.exports = {createNewClass};
