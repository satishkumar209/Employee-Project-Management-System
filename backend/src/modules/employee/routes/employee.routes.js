const express = require("express");

const router = express.Router();

const authenticate = require("../../auth/middleware/authenticate");
const { authorize } = require("../middleware/authorize");
const validate = require("../../../middleware/validate");
const {mongoIdValidator,
} = require("../../../validators/common.validator");

const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require("../controller/employee.controller");

const {
  createEmployeeValidator,
  updateEmployeeValidator,
} = require("../validator/employee.validator");

router.post(
  "/",
  authenticate,
  authorize("ADMIN"),
  createEmployeeValidator,
  validate,
  createEmployee
);

router.get(
  "/",
  authenticate,
  authorize("ADMIN"),
  getEmployees
);

router.get(
    "/:id",
    authenticate,
    authorize("ADMIN"),
    mongoIdValidator(),
    validate,
    getEmployeeById
);

router.patch(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  updateEmployeeValidator,
  validate,
  updateEmployee
);

router.delete(
  "/:id",
  authenticate,
  authorize("ADMIN"),
  deleteEmployee
);

//console.log("authorize =", authorize);

module.exports = router;