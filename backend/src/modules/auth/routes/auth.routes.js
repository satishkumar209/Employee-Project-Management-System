const express = require("express");
const router = express.Router();

const authenticate = require("../../../middleware/authenticate");
const validate = require("../../../middleware/validate");


const {
  login,
  logout,
  getCurrentUser,
} = require("../controller/auth.controller");

const { loginValidator } = require("../validator/auth.validator");

console.log("login =", login);
console.log("validate =", validate);
console.log("loginValidator =", loginValidator);
console.log("authenticate =", authenticate);

router.post(
  "/login",
  loginValidator,
  validate,
  login
);

router.post(
  "/logout",
  authenticate,
  logout
);

router.get(
  "/me",
  authenticate,
  getCurrentUser
);


module.exports = router;