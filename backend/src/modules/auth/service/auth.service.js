const {
  findUserByEmail,
  findUserById,
} = require("../repository/auth.repository");

const { generateAccessToken } = require("../../../utils/jwt");

const loginService = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error("Invalid Email or Password");
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    throw new Error("Invalid Email or Password");
  }

  const token = generateAccessToken({
    id: user._id,
    role: user.role,
  });

  return {
    user,
    token,
  };
};

const getCurrentUserService = async (id) => {
  return await findUserById(id);
};

module.exports = {
  loginService,
  getCurrentUserService,
};