const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const routes = require("./routes");

const app = express();

/**
 * ==========================================
 * Security Middleware
 * ==========================================
 */

app.use(helmet());

/**
 * ==========================================
 * CORS Configuration
 * ==========================================
 */

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

/**
 * ==========================================
 * Compression
 * ==========================================
 */

app.use(compression());

/**
 * ==========================================
 * Logger
 * ==========================================
 */

app.use(morgan("dev"));

/**
 * ==========================================
 * Body Parser
 * ==========================================
 */

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

/**
 * ==========================================
 * Cookie Parser
 * ==========================================
 */

app.use(cookieParser());

/**
 * ==========================================
 * Routes
 * ==========================================
 */

app.use("/api/v1", routes);

/**
 * ==========================================
 * 404 Handler
 * ==========================================
 */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

/**
 * ==========================================
 * Global Error Handler
 * ==========================================
 */

app.use((err, req, res, next) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;