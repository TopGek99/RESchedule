const router = require('express').Router();
const { Employee, Task, Manager } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
	try {
		res.render('homepage');
		res.status(200);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/manager', async (req, res) => {
	try {
		if (!req.session.logged_in) {
			res.redirect('/');
			return;
		}
		const managerData = await Manager.findByPk(req.session.manager_id, {
			include: [
				{
					model: Employee,
					attributes: ['first_name', 'last_name', 'email', 'availability'],
				},
				{
					model: Task,
					attributes: ['title', 'start_time', 'finish_time'],
				},
			],
		});

		const manager = managerData.get({ plain: true });

		res.status(200);
		res.render('manager', {
			...manager,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/employee', async (req, res) => {
	// try {
	if (!req.session.logged_in) {
		res.redirect('/');
		return;
	}
	const employeeData = await Employee.findByPk(req.session.employee_id, {
		include: [
			{
				model: Task,
				attributes: ['title', 'start_time', 'finish_time'],
			},
		],
	});

	const employee = employeeData.get({ plain: true });

	res.status(200).json(employee);
	// res.render('employee', {
	// 	...employee,
	// 	logged_in: req.session.logged_in,
	// });
	// } catch (err) {
	// 	res.status(500).json(err);
	// }
});

module.exports = router;
