const crypto = require("crypto");

const generateJwtSecret = () => {
  return crypto.randomBytes(32).toString("hex");
};
console.log("JSWTOKEN", generateJwtSecret());
module.exports = {
  port: process.env.PORT || 3000, // Using the PORT environment variable if set, otherwise use 3000
  dbURI: process.env.DB_URI || "mongodb://127.0.0.1:27017/quiz", // Using the DB_URI environment variable if set, otherwise  the local MongoDB URI
  jwtSecret: process.env.JWT_SECRET || generateJwtSecret(), // Using the JWT_SECRET environment variable if set, otherwise generating a new secret key
  jwtExpiresIn: process.env.JWT_SECRET,
};
