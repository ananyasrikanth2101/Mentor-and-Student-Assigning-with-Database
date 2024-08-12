const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mentor: {
    type: [Number],
    default: [],
  },
});

const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
module.exports = Student;
