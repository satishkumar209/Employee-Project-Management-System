const User = require("../../auth/model/user.model");

// Create Employee
const createEmployee = async (employeeData) => {
  return await User.create(employeeData);
};

// Get All Employees
const getEmployees = async () => {
  return await User.find({ role: "EMPLOYEE" }).select("-password");
};

// Get Employee By Id
const getEmployeeById = async (id) => {
  return await User.findOne({
    _id: id,
    role: "EMPLOYEE",
  }).select("-password");
};

// Find Employee By Email
const findEmployeeByEmail = async (email) => {
  return await User.findOne({ email });
};

// Update Employee
const updateEmployee = async (id, data) => {
  return await User.findByIdAndUpdate(
    id,
    data,
    {
      new: true,
      runValidators: true,
    }
  ).select("-password");
};

// Delete Employee
const deleteEmployee = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  findEmployeeByEmail,
  updateEmployee,
  deleteEmployee,
};