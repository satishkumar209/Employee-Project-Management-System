const express = require("express");

const router = express.Router();

/**
 * Health Check Route
 */

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "EPMS API is running successfully 🚀",
  });
});

module.exports = router;