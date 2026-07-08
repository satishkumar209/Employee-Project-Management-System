const {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  findEmployeeByEmail,
} = require("../repository/employee.repository");

const createEmployeeService = async (employeeData) => {
  const existingEmployee = await findEmployeeByEmail(employeeData.email);

  if (existingEmployee) {
    throw new Error("Employee already exists");
  }

  employeeData.role = "EMPLOYEE";

  return await createEmployee(employeeData);
};

const getEmployeesService = async () => {
  return await getEmployees();
};

const getEmployeeByIdService = async (id) => {
  const employee = await getEmployeeById(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

const updateEmployeeService = async (id, data) => {
  const employee = await updateEmployee(id, data);

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

const deleteEmployeeService = async (id) => {
  const employee = await deleteEmployee(id);

  if (!employee) {
    throw new Error("Employee not found");
  }

  return employee;
};

module.exports = {
  createEmployeeService,
  getEmployeesService,
  getEmployeeByIdService,
  updateEmployeeService,
  deleteEmployeeService,
};