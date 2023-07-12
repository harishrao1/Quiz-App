const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Register and login routes

/**
 * 
 * Register User (POST /auth/register):
 * 
 * {
  "username": "harishRao",
  "password": "password123"
}

 */
router.post("/register", authController.register);

/**
 *
 * Login User POST  /auth/login:
 * {
  "username": "harishRao",
  "password": "password123"
}
 * 
 */
router.post("/login", authController.login);

module.exports = router;
