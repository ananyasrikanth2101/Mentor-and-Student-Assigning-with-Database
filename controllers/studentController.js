const Student = require('../models/studentModel');
const Mentor = require('../models/mentorModel');

exports.createStudent = async (req, res) => {
  try {
    const { id, name, email } = req.body;
    const student = new Student({ id, name, email });
    await student.save();
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({ mentor: { $exists: false } });
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
