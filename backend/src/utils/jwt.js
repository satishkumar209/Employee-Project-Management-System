const jwt = require("jsonwebtoken");
const env = require("../config/env");

const generateAccessToken = (payload) => {
  return jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });
};

const verifyAccessToken = (token) => {
  return jwt.verify(token, env.JWT_SECRET);
};

console.log("JWT_SECRET:", env.JWT_SECRET);
console.log("JWT_EXPIRES_IN:", env.JWT_EXPIRES_IN);

module.exports = {
  generateAccessToken,
  verifyAccessToken,
};