const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a New Quiz
router.post(
  "/quizzes",
  authMiddleware.authenticateToken,
  quizController.createQuiz
);
module.exports = router;
