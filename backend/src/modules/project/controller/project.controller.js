const {
  createProjectService,
  getProjectsService,
  getProjectByIdService,
  updateProjectService,
  deleteProjectService,
  assignEmployeesService,
  updateProgressService,
} = require("../service/project.service");

/**
 * Create Project
 */
const createProject = async (req, res, next) => {
  try {
    const project = await createProjectService(
      req.body,
      req.user.id
    );

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get All Projects
 */
const getProjects = async (req, res, next) => {
  try {
    const projects = await getProjectsService();

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get Project By Id
 */
const getProjectById = async (req, res, next) => {
  try {
    const project = await getProjectByIdService(
      req.params.id
    );

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update Project
 */
const updateProject = async (req, res, next) => {
  try {
    const project = await updateProjectService(
      req.params.id,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete Project
 */
const deleteProject = async (req, res, next) => {
  try {
    await deleteProjectService(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Assign Employees
 */
const assignEmployees = async (req, res, next) => {
  try {
    const project = await assignEmployeesService(
      req.params.id,
      req.body.employeeIds
    );

    res.status(200).json({
      success: true,
      message: "Employees assigned successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update Progress
 */
const updateProgress = async (req, res, next) => {
  try {
    const project = await updateProgressService(
      req.params.id,
      req.body.progress,
      req.body.status
    );

    res.status(200).json({
      success: true,
      message: "Project progress updated successfully",
      data: project,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  assignEmployees,
  updateProgress,
};