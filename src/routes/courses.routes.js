const {Router} = require("express");
const {
  getAllCourses,
  createCourse,
  updateCourse,
  getCoursesWithCategAndVideos
} = require("../controllers/courses.controller");

const router = Router();

router.get('/courses', getAllCourses);
router.get('/courses/category/videos', getCoursesWithCategAndVideos);
router.post('/courses', createCourse);
router.put('/courses/:id', updateCourse);

module.exports = router;