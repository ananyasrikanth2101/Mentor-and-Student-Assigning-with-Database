const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
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
  mentee: {
    type: [Number],
    default: [],
  },
});

const Mentor = mongoose.models.Mentor || mongoose.model("Mentor", mentorSchema);
module.exports = Mentor;
