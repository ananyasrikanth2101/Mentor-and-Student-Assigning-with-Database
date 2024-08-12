const Mentor = require('../models/mentorModel');
const Student = require('../models/studentModel');

exports.createMentor = async (req, res) => {
  try {
    const { id, name, email } = req.body;
    const mentor = new Mentor({ id, name, email });
    await mentor.save();
    res.status(201).json(mentor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getStudentsForMentor = async (req, res) => {
  try {
    const mentorId = Number(req.params.id);
    const mentor = await Mentor.findOne({ id: mentorId });
    if (!mentor) return res.status(404).json({ error: 'Mentor not found' });
    
    const students = await Student.find({ mentor: mentorId });
    res.json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.assignStudentsToMentor = async (req, res) => {
  try {
    const mentorId = Number(req.params.id);
    const { students } = req.body;

    const mentor = await Mentor.findOne({ id: mentorId });
    if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

    mentor.mentee.push(...students);
    await mentor.save();

    await Student.updateMany(
      { id: { $in: students } },
      { $set: { mentor: mentorId } }
    );

    res.status(200).json({ message: 'Students assigned successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.assignOrChangeMentorForStudent = async (req, res) => {
  try {
    const studentId = Number(req.params.id);
    const { mentorId } = req.body;

    const student = await Student.findOne({ id: studentId });
    if (!student) return res.status(404).json({ error: 'Student not found' });

    const previousMentorId = student.mentor[0];

    if (previousMentorId) {
      await Mentor.updateOne(
        { id: previousMentorId },
        { $pull: { mentee: studentId } }
      );
    }

    await Student.updateOne(
      { id: studentId },
      { $set: { mentor: [mentorId] } }
    );

    await Mentor.updateOne(
      { id: mentorId },
      { $addToSet: { mentee: studentId } }
    );

    res.status(200).json({ message: 'Mentor assigned/changed successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPreviousMentorForStudent = async (req, res) => {
  try {
    const studentId = Number(req.params.id);
    const student = await Student.findOne({ id: studentId });
    if (!student) return res.status(404).json({ error: 'Student not found' });

    const previousMentorId = student.mentor[0];
    if (!previousMentorId) return res.status(404).json({ error: 'No previous mentor found' });

    const mentor = await Mentor.findOne({ id: previousMentorId });
    if (!mentor) return res.status(404).json({ error: 'Mentor not found' });

    res.json(mentor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
