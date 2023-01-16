const { Router } = require("express");
const {
  getUserById,
  getUserWithCourses,
  createUser,
  updateUser,
} = require("../controllers/users.controller")

const router = Router();

router.get('/users/:id', getUserById);
router.get('/users/:id/courses', getUserWithCourses);
router.post('/users', createUser);
router.put('/users/:id', updateUser);

module.exports = router;
