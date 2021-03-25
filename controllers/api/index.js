const router = require("express").Router();
const employeeRoutes = require("./employeeRoutes");
const managerRoutes = require("./managerRoutes");
const taskRoutes = require("./taskRoutes");

router.use("/employee", employeeRoutes);
router.use("/manager", managerRoutes);
router.use("/tasks", taskRoutes);

module.exports = router;
