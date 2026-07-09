const {
  getAdminDashboard,
  getEmployeeDashboard,
} = require("../repository/dashboard.repository");

/**
 * Admin Dashboard Service
 */
const getAdminDashboardService = async () => {
  return await getAdminDashboard();
};

/**
 * Employee Dashboard Service
 */
const getEmployeeDashboardService = async (employeeId) => {
  return await getEmployeeDashboard(employeeId);
};

module.exports = {
  getAdminDashboardService,
  getEmployeeDashboardService,
};