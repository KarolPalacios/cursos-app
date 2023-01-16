const Courses = require("../models/courses.models");
const UserCourses = require("../models/userCourses.model");
const Users = require("../models/users.models");

class UserServices {
  static async getById(id) {
    try {
      const result = await Users.findOne({
        where: {id},
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"]
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(id) {
    try {
      const result = await Users.findOne({
        where: {id},
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"]
        },

        include: {
          model: UserCourses,
          attributes: {
            exclude: ["id", "user_id", "course_id"]
          },
          as: "courses",
          include: {
            model: Courses,
            as: "course",
            attributes: ["title"]
          }
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(user) {
    try {
      const result = Users.create(user);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Users.update(field, {
        where: {id},
        attributes: ["firstName", "lastName", "password"]
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = UserServices;