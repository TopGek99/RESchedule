const sequelize = require('../config/connection');
const { Employee, Manager, Task } = require('../models');

const employeeData = require('./employeeData.json');
const managerData = require('./managerData.json');
const taskData = require('./taskData.json');

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	await Manager.bulkCreate(managerData, {
		individualHooks: true,
		returning: true,
	});

	await Employee.bulkCreate(employeeData, {
		individualHooks: true,
		returning: true,
	});

	await Task.bulkCreate(taskData, {
		individualHooks: true,
		returning: true,
	});

	process.exit(0);
};

seedDatabase();
