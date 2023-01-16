const CourseServices = require("../services/course.services");

const getAllCourses = async (req, res) => {
  try {
    const result = await CourseServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getCoursesWithCategAndVideos = async (req, res) => {
  try {
    const result = await CourseServices.getWithCategAndVideos();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
}

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await CourseServices.create(newCourse);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateCourse = async (req, res) => {
  try {
    const {id} = req.params;
    const field = req.body;
    const result = await CourseServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getAllCourses,
  createCourse,
  updateCourse,
  getCoursesWithCategAndVideos
};