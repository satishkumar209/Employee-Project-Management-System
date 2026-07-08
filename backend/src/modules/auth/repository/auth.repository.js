const User = require("../model/user.model");

const findUserByEmail = async (email) => {
  return await User.findOne({ email }).select("+password");
};

const findUserById = async (id) => {
  return await User.findById(id);
};

module.exports = {
  findUserByEmail,
  findUserById,
};