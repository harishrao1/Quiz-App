const express = require("express");
const router = express.Router();
const participantController = require("../controllers/participationController");
// const authMiddleware = require("../middleware/authMiddleware");

// Take a quiz

/**
 * 
 * POST /quizzes/quiz_id/take
Content-Type: application/json

{
  "name": "Harish Rao",
  "email": "harish@gmail.com",
  "phoneNumber": "1234567890",
  "answers": [
    {
      "questionId": "question_id1",
      "selectedOptions": [""]
    },
    {
      "questionId": "question_id2",
      "selectedOptions": [""]
    },
    {
      "questionId": "question_id3",
      "selectedOptions": [""]
    }
  ]
}
 * 
 */
router.post("/quizzes/:quizId/take", participantController.takeQuiz);
// Get Scores

router.get(
  "/quizzes/:quizId/scores",
  participantController.getParticipantScores
);

module.exports = router;
