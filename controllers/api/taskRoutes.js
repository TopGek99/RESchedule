const router = require('express').Router();
const { Task } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req ,res) => {
  try {
    const newTask = await Task.create({
      ...req.body,
      employee_id: req.session.employee_id
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
      }
    });

    if (!taskData) {
      res.status(404).json({ message: 'No task found by that id'})
    }
  } catch (err) {
    res.status(400).json(err)
  }
})