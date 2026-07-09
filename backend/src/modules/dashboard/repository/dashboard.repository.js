const User = require("../../auth/model/user.model");
const Project = require("../../project/model/project.model");

/**
 * Admin Dashboard Statistics
 */
const getAdminDashboard = async () => {
  const [
    totalEmployees,
    totalProjects,
    completedProjects,
    pendingProjects,
    inProgressProjects,
  ] = await Promise.all([
    User.countDocuments({
      role: "EMPLOYEE",
      status: "ACTIVE",
    }),

    Project.countDocuments({
      isDeleted: false,
    }),

    Project.countDocuments({
      status: "COMPLETED",
      isDeleted: false,
    }),

    Project.countDocuments({
      status: "PENDING",
      isDeleted: false,
    }),

    Project.countDocuments({
      status: "IN_PROGRESS",
      isDeleted: false,
    }),
  ]);

  return {
    totalEmployees,
    totalProjects,
    completedProjects,
    pendingProjects,
    inProgressProjects,
  };
};

/**
 * Employee Dashboard Statistics
 */
const getEmployeeDashboard = async (employeeId) => {
  const assignedProjects = await Project.find({
    assignedEmployees: employeeId,
    isDeleted: false,
  });

  return {
    assignedProjects: assignedProjects.length,

    completedProjects: assignedProjects.filter(
      (project) => project.status === "COMPLETED"
    ).length,

    pendingProjects: assignedProjects.filter(
      (project) => project.status === "PENDING"
    ).length,

    inProgressProjects: assignedProjects.filter(
      (project) => project.status === "IN_PROGRESS"
    ).length,

    projects: assignedProjects,
  };
};

module.exports = {
  getAdminDashboard,
  getEmployeeDashboard,
};