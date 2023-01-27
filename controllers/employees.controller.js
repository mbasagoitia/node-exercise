const query = require("../db/utils");

const findAll = async () => {
  return await query("SELECT EmployeeID, FirstName, LastName, Title FROM employees");
};

const findOne = async (id) => {
  return await query("SELECT EmployeeID, FirstName, LastName, Title FROM employees WHERE EmployeeID = ?", [
    id,
  ]);
};

const addOne = async (employee) => {
    return await query("INSERT INTO employees SET ?", [employee]);
  };
  
  const updateOne = async (employee, id) => {
    return await query("UPDATE employees SET ? WHERE EmployeeID = ?", [
      employee,
      id,
    ]);
  };
  
  const removeOne = async (id) => {
    return await query("DELETE FROM employees WHERE EmployeeID = ?", [id]);
  };

  module.exports = {
    findAll,
    findOne,
    addOne,
    updateOne,
    removeOne,
  };