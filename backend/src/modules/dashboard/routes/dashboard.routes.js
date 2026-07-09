const express = require("express");

const router = express.Router();

const authenticate = require("../../../middleware/authenticate");
const { authorize } = require("../../../middleware/authorize");

const {
  getAdminDashboard,
  getEmployeeDashboard,
} = require("../controller/dashboard.controller");

/**
 * Admin Dashboard
 */
router.get(
  "/admin",
  authenticate,
  authorize("ADMIN"),
  getAdminDashboard
);

/**
 * Employee Dashboard
 */
router.get(
  "/employee",
  authenticate,
  authorize("EMPLOYEE"),
  getEmployeeDashboard
);

module.exports = router;