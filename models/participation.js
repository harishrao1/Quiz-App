const mongoose = require("mongoose");

const participationSchema = new mongoose.Schema({
  quiz: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true },
  participant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  participantName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  answers: [
    {
      questionId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: true,
      },
      answers: [{ type: String, required: true }],
    },
  ],
});

module.exports = mongoose.model("Participant", participationSchema);
