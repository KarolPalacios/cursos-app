const Categories = require("../models/categories.models");
const CourseCategories = require("../models/courseCategories.model");
const Courses = require("../models/courses.models");
const Videos = require("../models/videos.models");

class CourseServices {
  static async getAll() {
    try {
      const result = await Courses.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCategAndVideos() {
    try {
      const result = await Courses.findAll({
        include: {
          model: CourseCategories,
          as: "categories",
          attributes: ["id"],

          include: {
            model: Categories,
            as: "category",
            attributes: ["name"],
          },
        },
        include: {
          model: Videos,
          as: "videos",
          attributes: ["title", "url"]
        }

      });
      return result;
    } catch (error) {
      throw error;
    }
  }






  static async create(course) {
    try {
      const result = Courses.create(course);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Courses.update(field, {
        where: {id},
        attributes: ["description"]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = CourseServices;