const { body } = require("express-validator");

const {
  emailValidator,
  passwordValidator,
} = require("../../../validators/common.validator");

const createEmployeeValidator = [

  body("firstName")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First name must be at least 2 characters"),

  body("lastName")
    .trim()
    .notEmpty()
    .withMessage("Last name is required"),

  emailValidator,

  passwordValidator,

  body("phone")
    .matches(/^[0-9]{10}$/)
    .withMessage("Phone must be 10 digits"),

  body("department")
    .notEmpty()
    .withMessage("Department is required"),

  body("designation")
    .notEmpty()
    .withMessage("Designation is required"),
];

const updateEmployeeValidator = [

  body("firstName")
    .optional()
    .isLength({ min: 2 }),

  body("lastName")
    .optional()
    .notEmpty(),

  body("email")
    .optional()
    .isEmail(),

  body("phone")
    .optional()
    .matches(/^[0-9]{10}$/),

  body("department")
    .optional()
    .notEmpty(),

  body("designation")
    .optional()
    .notEmpty(),
];

module.exports = {
  createEmployeeValidator,
  updateEmployeeValidator,
};