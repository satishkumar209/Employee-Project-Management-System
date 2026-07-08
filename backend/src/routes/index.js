const express = require("express");
const router = express.Router();
const authRoutes = require("../modules/auth");
const employeeRoutes = require("../modules/employee");
const projectRoutes = require("../modules/project");
/**
 * Health Check Route
 */

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "EPMS API is running successfully 🚀",
  });
});

router.use("/auth", authRoutes);
router.use("/employees", employeeRoutes);
router.use("/projects", projectRoutes);

module.exports = router;

