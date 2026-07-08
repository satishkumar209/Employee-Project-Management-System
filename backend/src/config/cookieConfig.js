const env = require("./env");

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: Number(env.COOKIE_EXPIRES) * 24 * 60 * 60 * 1000,
};

module.exports = cookieOptions;