import axios from "axios";

const EMPLOYEE_API_BASE_URL = process.env.REACT_APP_NOT_SECRET_CODE;

function saveEmployee(employee) {
  return axios.post(EMPLOYEE_API_BASE_URL, employee);
}

function getEmployees() {
  return axios.get(EMPLOYEE_API_BASE_URL);
}
function deleteEmployee(id) {
  return axios.delete(EMPLOYEE_API_BASE_URL + "/" + id);
}

function getEmployeeById(id) {
  return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
}

function updateEmployee(employee, id) {
  return axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
}

const EmployeeService = {
  saveEmployee,
  getEmployees,
  deleteEmployee,
  getEmployeeById,
  updateEmployee,
};

export default EmployeeService;
