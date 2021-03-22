const Employee = require("./Employee");
const Task = require("./Task");
const Manager = require("./Manager");

Manager.hasMany(Employee, {
  foreignKey: "manager_id",
  onDelete: "CASCADE",
});

Task.belongsTo(Employee, {
  foreignKey: "employee_id",
});
Task.belongsTo(Manager, {
  foreignKey: "manager_id",
});

Employee.belongsTo(Manager, {
  foreignKey: "manager_id",
});

Employee.hasMany(Task, {
  foreignKey: "task_id",
  onDelete: "CASCADE",
});

Manager.hasMany(Task, {
  foreignKey: "task_id",
  onDelete: "CASCADE",
});

module.exports = { Employee, Manager, Task };
