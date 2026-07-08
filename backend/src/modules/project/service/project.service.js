const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  assignEmployees,
  updateProgress,
  findProjectByName,
} = require("../repository/project.repository");

const User = require("../../auth/model/user.model");

/**
 * Create Project
 */
const createProjectService = async (projectData, adminId) => {
  const existingProject = await findProjectByName(
    projectData.projectName
  );

  if (existingProject) {
    throw new Error("Project already exists");
  }

  if (
    new Date(projectData.endDate) <
    new Date(projectData.startDate)
  ) {
    throw new Error("End date cannot be before start date");
  }

  projectData.createdBy = adminId;

  return await createProject(projectData);
};

/**
 * Get All Projects
 */
const getProjectsService = async () => {
  return await getProjects();
};

/**
 * Get Project By Id
 */
const getProjectByIdService = async (id) => {
  const project = await getProjectById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  return project;
};

/**
 * Update Project
 */
const updateProjectService = async (id, data) => {
  const project = await getProjectById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  if (
    data.startDate &&
    data.endDate &&
    new Date(data.endDate) < new Date(data.startDate)
  ) {
    throw new Error("End date cannot be before start date");
  }

  return await updateProject(id, data);
};

/**
 * Delete Project
 */
const deleteProjectService = async (id) => {
  const project = await getProjectById(id);

  if (!project) {
    throw new Error("Project not found");
  }

  return await deleteProject(id);
};

/**
 * Assign Employees
 */
const assignEmployeesService = async (
  projectId,
  employeeIds
) => {
  const project = await getProjectById(projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  const employees = await User.find({
    _id: { $in: employeeIds },
    role: "EMPLOYEE",
  });

  if (employees.length !== employeeIds.length) {
    throw new Error("One or more employees are invalid");
  }

  return await assignEmployees(projectId, employeeIds);
};

/**
 * Update Progress
 */
const updateProgressService = async (
  projectId,
  progress,
  status
) => {
  const project = await getProjectById(projectId);

  if (!project) {
    throw new Error("Project not found");
  }

  if (progress < 0 || progress > 100) {
    throw new Error("Progress must be between 0 and 100");
  }

  return await updateProgress(
    projectId,
    progress,
    status
  );
};

module.exports = {
  createProjectService,
  getProjectsService,
  getProjectByIdService,
  updateProjectService,
  deleteProjectService,
  assignEmployeesService,
  updateProgressService,
};