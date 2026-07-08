const { body } = require("express-validator");

const createEmployeeValidator = [
  body("firstName").notEmpty().withMessage("First name is required"),

  body("lastName").notEmpty().withMessage("Last name is required"),

  body("email")
    .isEmail()
    .withMessage("Valid email is required"),

  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),

  body("phone").notEmpty(),

  body("department").notEmpty(),

  body("designation").notEmpty(),
];

const updateEmployeeValidator = [
  body("email").optional().isEmail(),

  body("password")
    .optional()
    .isLength({ min: 6 }),
];

module.exports = {
  createEmployeeValidator,
  updateEmployeeValidator,
};