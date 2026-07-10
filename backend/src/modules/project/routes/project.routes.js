const express = require("express");

const router = express.Router();

const authenticate = require("../../../middleware/authenticate");
const { authorize } = require("../../../middleware/authorize");
const validate = require("../../../middleware/validate");

const {
  mongoIdValidator,
} = require("../../../validators/common.Validator");

const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  assignEmployees,
  updateProgress,
} = require("../controller/project.controller");

const {
  createProjectValidator,
  updateProjectValidator,
  assignEmployeesValidator,
  updateProgressValidator,
} = require("../validator/project.validator");

/**
 * Create Project
 */
router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createProjectValidator,
  validate,
  createProject
);

/**
 * Get All Projects
 */
router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  getProjects
);

/**
 * Get Project By Id
 */
router.get(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  getProjectById,
  mongoIdValidator(),
  validate,
);

/**
 * Update Project
 */
router.patch(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  updateProjectValidator,
  validate,
  mongoIdValidator(),
  updateProject
);

/**
 * Delete Project
 */
router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteProject,
   
);

/**
 * Assign Employees
 */
router.patch(
  "/:id/assign",
  authenticate,
  authorize("ADMIN"),
  assignEmployeesValidator,
  validate,
  mongoIdValidator(),
  assignEmployees
);

/**
 * Update Project Progress
 */
router.patch(
  "/:id/progress",
  authenticate,
  authorize("ADMIN", "EMPLOYEE"),
  updateProgressValidator,
  validate,
  mongoIdValidator(),
  updateProgress
);

module.exports = router;