const {
  loginService,
  getCurrentUserService,
} = require("../service/auth.service");

const cookieOptions = require("../../../config/cookieConfig");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const { user, token } = await loginService(email, password);

    res.cookie("accessToken", token, cookieOptions);

    res.status(200).json({
      success: true,
      message: "Login Successful",
      data: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

const logout = (req, res) => {
  res.clearCookie("accessToken");

  res.status(200).json({
    success: true,
    message: "Logout Successful",
  });
};

const getCurrentUser = async (req, res, next) => {
  try {
    const user = await getCurrentUserService(req.user.id);

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  login,
  logout,
  getCurrentUser,
};