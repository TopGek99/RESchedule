const sequelize = require('../config/connection');
const { Employee, Manager, Task } = require('../models');

const employeeData = require('./employeeData.json');
const managerData = require('./managerData.json');
const taskData = require('./taskData.json');

const seedDatabase = async () => {
	await sequelize.sync({ force: true });

	await Manager.bulkCreate(managerData);

	let employeeCount = 0;
	for (const employee of employeeData) {
		await Employee.create({
			...employee,
			manager_id: (employeeCount % 2) + 1,
		});
		employeeCount++;
	}

	let taskCount = 0;
	for (const task of taskData) {
		await Task.create({
			...task,
			manager_id: (taskCount % 2) + 1,
			employee_id: employeeCount,
		});
		taskCount++;
	}

	process.exit(0);
};

seedDatabase();
