const express = require("express");
const router = express.Router();
const quizController = require("../controllers/quizController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a New Quiz

/**
 * 
 * POST /quizzes
Content-Type: application/json

{
  "title": "JavaScript Quiz",
  "questions": [
    {
      "text": "Which of the following is NOT a primitive data type in JavaScript?",
      "options": ["String", "Number", "Boolean", "Object"],
      "correctAnswers": ["Object"]
    }
  ],
}
 */
router.post(
  "/quizzes",
  authMiddleware.authenticateToken,
  quizController.createQuiz
);
module.exports = router;
