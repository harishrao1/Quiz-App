const crypto = require("crypto");

const generateJwtSecret = () => {
  return crypto.randomBytes(32).toString("hex");
};
console.log("JSWTOKEN", generateJwtSecret());
module.exports = {
  port: process.env.PORT || 3000,
  dbURI: process.env.DB_URI || "mongodb://127.0.0.1:27017/quiz",
  jwtSecret: process.env.JWT_SECRET || generateJwtSecret(),
  jwtExpiresIn: process.env.JWT_SECRET,
};
