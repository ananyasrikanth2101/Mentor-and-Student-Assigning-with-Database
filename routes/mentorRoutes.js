const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorController");

router.post("/mentors", mentorController.createMentor);
router.post(
  "/mentors/:id/assign-students",
  mentorController.assignStudentsToMentor
);
router.get("/mentors/:id/students", mentorController.getStudentsForMentor);
router.post(
  "/students/:id/change-mentor",
  mentorController.assignOrChangeMentorForStudent
);
router.get(
  "/students/:id/previous-mentor",
  mentorController.getPreviousMentorForStudent
);

module.exports = router;
