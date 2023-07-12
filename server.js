const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();
mongoose
  .connect(config.dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connected to MongoDB:${config.dbURI}`))
  .catch((error) => console.log(`Failed to connect to MongoDB:`, error));

// Creating Express App
const app = express();

//MiddleWare
app.use(express.json());

//Routes
const authRoutes = require("./routes/authRoutes");
const quizRoutes = require("./routes/quizRoutes");
const participantRoutes = require("./routes/participantRoutes");

app.use("/auth", authRoutes);
app.use("/api", quizRoutes);
app.use("/api", participantRoutes);

// Starting the Server
app.listen(config.port, () => {
  console.log(`Server is Running on port ${config.port}`);
});
