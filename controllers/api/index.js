const router = require('express').Router();
const employeeRoutes = require('./employeeRoutes');
const managerRoutes = require('./managerRoutes');
const taskRoutes = require('./taskRoutes');

router.use('./employees', employeeRoutes);
router.use('./managers', managerRoutes);
router.use('./tasks', taskRoutes);

module.exports = router;
