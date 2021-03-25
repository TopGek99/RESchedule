const sequelize = require('../config/connection');
const { Employee, Manager, Task } = require('../models');

const employeeData = require('./employeeData.json');
const managerData = require('./managerData.json');
const taskData = require('./taskData.json');

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	await Manager.bulkCreate(managerData);

	await Employee.bulkCreate(employeeData);

	await Task.bulkCreate(taskData);

	process.exit(0);
};

seedDatabase();
