const { body } = require("express-validator");

/**
 * Create Project Validator
 */
const createProjectValidator = [
  body("projectName")
    .trim()
    .notEmpty()
    .withMessage("Project name is required"),

  body("description")
    .trim()
    .notEmpty()
    .withMessage("Description is required"),

  body("startDate")
    .notEmpty()
    .withMessage("Start date is required")
    .isISO8601()
    .withMessage("Invalid start date"),

  body("endDate")
    .notEmpty()
    .withMessage("End date is required")
    .isISO8601()
    .withMessage("Invalid end date"),
];

/**
 * Update Project Validator
 */
const updateProjectValidator = [
  body("projectName")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Project name cannot be empty"),

  body("description")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Description cannot be empty"),

  body("startDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid start date"),

  body("endDate")
    .optional()
    .isISO8601()
    .withMessage("Invalid end date"),

  body("status")
    .optional()
    .isIn([
      "PENDING",
      "IN_PROGRESS",
      "COMPLETED",
      "ON_HOLD",
    ])
    .withMessage("Invalid status"),
];

/**
 * Assign Employees Validator
 */
const assignEmployeesValidator = [
  body("employeeIds")
    .isArray({ min: 1 })
    .withMessage("Employee IDs must be a non-empty array"),

  body("employeeIds.*")
    .isMongoId()
    .withMessage("Invalid employee id"),
];

/**
 * Update Progress Validator
 */
const updateProgressValidator = [
  body("progress")
    .isInt({ min: 0, max: 100 })
    .withMessage("Progress must be between 0 and 100"),

  body("status")
    .isIn([
      "PENDING",
      "IN_PROGRESS",
      "COMPLETED",
      "ON_HOLD",
    ])
    .withMessage("Invalid status"),
];

module.exports = {
  createProjectValidator,
  updateProjectValidator,
  assignEmployeesValidator,
  updateProgressValidator,
};