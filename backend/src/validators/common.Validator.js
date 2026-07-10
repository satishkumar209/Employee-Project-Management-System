const { body, param } = require("express-validator");

const emailValidator = body("email")
  .trim()
  .isEmail()
  .withMessage("Valid email is required")
  .normalizeEmail();

const passwordValidator = body("password")
  .isLength({ min: 8 })
  .withMessage("Password must be at least 8 characters");

const mongoIdValidator = (field = "id") =>
  param(field)
    .isMongoId()
    .withMessage(`Invalid ${field}`);

module.exports = {
  emailValidator,
  passwordValidator,
  mongoIdValidator,
};