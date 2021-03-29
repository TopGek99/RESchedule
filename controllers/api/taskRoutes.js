const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
	try {
		const newTask = await Task.create({
			...req.body,
			manager_id: req.session.manager_id,
		});

		res.status(200).json(newTask);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.delete('/:id', withAuth, async (req, res) => {
	try {
		const taskData = await Task.destroy({
			where: {
				id: req.params.id,
			},
		});

		if (!taskData) {
			res.status(404).json({ message: 'No task found by that id' });
			return;
		}
		res.status(200).json({ message: 'Task deleted successfully' });
	} catch (err) {
		res.status(400).json(err);
	}
});

module.exports = router;
