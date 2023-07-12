const Quiz = require("../models/quiz");
const Question = require("../models/question");
const User = require("../models/user");
// Creating New Quiz
exports.createQuiz = async (req, res) => {
  try {
    const { title, questions } = req.body;

    console.log(questions);
    const createdBy = req.user.userId;
    const user = await User.findById(createdBy);
    const username = user.username;
    const quiz = new Quiz({ title, createdBy: username });

    for (let i = 0; i < questions.length; i++) {
      const { text, options, correctAnswers } = questions[i];

      const question = new Question({
        text,
        options,
        correctAnswers,
      });
      quiz.questions.push(question);
    }
    await quiz.save();
    res.status(201).json({ message: "Quiz created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to create quiz" });
  }
};
