const mongoose = require("mongoose");

const classSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    teacherID: { type: String, required: true },
    students: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          unique: true,
        },
      },
    ],
    classCode: { type: String, required: true },
  },
  { timestamps: true }
);

const Class = mongoose.model("Class", classSchema);
module.exports = Class;
