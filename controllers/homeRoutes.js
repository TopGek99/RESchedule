const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
	try {
		res.render('homepage');
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/manager', async (req, res) => {
	try {
		const managerData = await Manager.findByPk(req.session.manager_id, {
			include: [
				{
					model: Task,
					attributes: ['title', 'time', 'length'],
				},
			],
		});

		const manager = managerData.get({ plain: true });

		res.render('manager', {
			...manager,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/employee', async (req, res) => {
	try {
		const employeeData = await Employee.findByPk(req.session.employee_id, {
			include: [
				{
					model: Task,
					attributes: ['title', 'time', 'length'],
				},
			],
		});

		const employee = employeeData.get({ plain: true });

		res.render('employee', {
			...employee,
			logged_in: req.session.logged_in,
		});
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
