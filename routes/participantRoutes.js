const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participationController");
// const authMiddleware = require("../middleware/authMiddleware");

// Take a quiz
router.post("/quizzes/:quizId/take", participantController.takeQuiz);
// Get Scores
router.get(
  "/quizzes/:quizId/scores",
  participantController.getParticipantScores
);

module.exports = router;
