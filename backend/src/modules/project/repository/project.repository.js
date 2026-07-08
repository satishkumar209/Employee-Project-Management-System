const Project = require("../model/project.model");

/**
 * Create Project
 */
const createProject = async (projectData) => {
  return await Project.create(projectData);
};

/**
 * Get All Projects
 */
const getProjects = async () => {
  return await Project.find({ isDeleted: false })
    .populate(
      "assignedEmployees",
      "firstName lastName email department designation"
    )
    .populate(
      "createdBy",
      "firstName lastName email"
    )
    .sort({ createdAt: -1 });
};

/**
 * Get Project By ID
 */
const getProjectById = async (id) => {
  return await Project.findOne({
    _id: id,
    isDeleted: false,
  })
    .populate(
      "assignedEmployees",
      "firstName lastName email department designation"
    )
    .populate(
      "createdBy",
      "firstName lastName email"
    );
};

/**
 * Update Project
 */
const updateProject = async (id, updateData) => {
  return await Project.findByIdAndUpdate(
    id,
    updateData,
    {
      new: true,
      runValidators: true,
    }
  )
    .populate(
      "assignedEmployees",
      "firstName lastName email department designation"
    )
    .populate(
      "createdBy",
      "firstName lastName email"
    );
};

/**
 * Soft Delete Project
 */
const deleteProject = async (id) => {
  return await Project.findByIdAndUpdate(
    id,
    {
      isDeleted: true,
    },
    {
      new: true,
    }
  );
};

/**
 * Assign Employees
 */
const assignEmployees = async (id, employeeIds) => {
  return await Project.findByIdAndUpdate(
    id,
    {
      assignedEmployees: employeeIds,
    },
    {
      new: true,
      runValidators: true,
    }
  )
    .populate(
      "assignedEmployees",
      "firstName lastName email"
    );
};

/**
 * Update Progress
 */
const updateProgress = async (
  id,
  progress,
  status
) => {
  return await Project.findByIdAndUpdate(
    id,
    {
      progress,
      status,
    },
    {
      new: true,
      runValidators: true,
    }
  );
};

/**
 * Find Project By Name
 */
const findProjectByName = async (projectName) => {
  return await Project.findOne({
    projectName,
    isDeleted: false,
  });
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  assignEmployees,
  updateProgress,
  findProjectByName,
};