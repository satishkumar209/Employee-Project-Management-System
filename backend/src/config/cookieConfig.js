const env = require("./env");

const cookieOptions = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "lax",
  maxAge: Number(env.COOKIE_EXPIRES) * 24 * 60 * 60 * 1000, // days -> milliseconds
};

module.exports = cookieOptions;