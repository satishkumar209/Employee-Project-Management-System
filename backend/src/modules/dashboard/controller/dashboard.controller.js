const {
  getAdminDashboardService,
  getEmployeeDashboardService,
} = require("../service/dashboard.service");

/**
 * Admin Dashboard
 */
const getAdminDashboard = async (req, res, next) => {
  try {
    const dashboard = await getAdminDashboardService();

    res.status(200).json({
      success: true,
      message: "Admin dashboard fetched successfully.",
      data: dashboard,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Employee Dashboard
 */
const getEmployeeDashboard = async (req, res, next) => {
  try {
    const dashboard = await getEmployeeDashboardService(req.user.id);

    res.status(200).json({
      success: true,
      message: "Employee dashboard fetched successfully.",
      data: dashboard,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAdminDashboard,
  getEmployeeDashboard,
};