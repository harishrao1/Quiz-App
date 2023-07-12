const Quiz = require("../models/user");
const Participation = require("../models/participation");
// exports.getUser = async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.status(200).json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve user" });
//   }
// };

// Take a Quiz
exports.takeQuiz = async (req, res) => {
  try {
    const quizId = req.params.quizId;
    const { name, email, phoneNumber, answers } = req.body;

    const quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).json({ error: "Quiz not found" });
    }

    let score = 0;
    for (let i = 0; i < answers.length; i++) {
      const question = quiz.questions[i];
      console.log(question);
      if (arraysMatch(question.correctAnswers, answers[i])) {
        score++;
      }
    }
    const participation = new Participation({
      quiz: quizId,
      participant: req.user.userId,
      participantName: name,
      email,
      phoneNumber,
      answers: answers.map((answer, index) => ({
        questionId: quiz.questions[index]._id,
        answer,
      })),
      score: score,
    });
    await participation.save();
    res.status(200).json({ score: score });
  } catch (error) {
    res.status(500).json({ error: "Failed to take quiz" });
  }
};

exports.getParticipantScores = async (req, res) => {
  try {
    const quizId = req.params.quizId;

    const scores = await (await Participation.find({ quiz: quizId }))
      .populate("participant", "username")
      .select("participant score");

    res.status(200).json({ scores });
  } catch (error) {
    res.status(500).json({ error: "Failed to get participant scores" });
  }
};

// Comparing 2 Arrays
function arraysMatch(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      return false;
    }
  }
  return true;
}
