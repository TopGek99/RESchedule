const router = require('express').Router();
const { Employee } = require('../../models');

router.post('/', async (req, res) => {
	// try {
	const employeeData = await Employee.create(req.body);

	req.session.save(() => {
		(req.session.employee_id = employeeData.id), (req.session.logged_in = true);
	});

	res.status(200).json(employeeData);
	// } catch (err) {
	res.status(400).json(err);
	// }
});

router.put('/availability', async (req, res) => {
	try {
		const employeeData = await Employee.update(req.body, {
			where: {
				id: req.session.employee_id,
			},
		});

		res.status(200).json(employeeData);
	} catch (err) {
		res.status(400).json(err);
	}
});

// Login
router.post('/login', async (req, res) => {
	try {
		const employeeData = await Employee.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (!employeeData) {
			res
				.status(400)
				.json({ message: 'Incorrect email or password, please try again' });
			return;
		}

		const validPassword = await employeeData.checkPassword(req.body.password);

		if (!validPassword) {
			res
				.status(400)
				.json({ message: 'Incorrect email or password, please try again' });
			return;
		}

		req.session.save(() => {
			(req.session.employee_id = employeeData.id),
				(req.session.logged_in = true);
			res.status(200).json(employeeData);
		});
	} catch (err) {
		res.status(400).json(err);
		console.log(err);
	}
});

// Logout
router.post('/logout', async (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;
