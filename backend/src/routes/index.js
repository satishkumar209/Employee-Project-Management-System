const express = require("express");

const router = express.Router();
const authRoutes = require("../modules/auth");

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

module.exports = router;